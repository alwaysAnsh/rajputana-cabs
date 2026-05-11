/**
 * Batch-compress images under public/images for smaller deploys and faster loads.
 * Run from client/:  npm run optimize-images
 *
 * - JPEG: mozjpeg, quality ~80, max width 1920 (keeps aspect)
 * - PNG: pngquant-like via sharp palette (lossy-ish) — skipped if has alpha (keeps as lossless png)
 * - WebP: quality ~82, max width 1920
 *
 * Only writes when the output is smaller than the original (unless --force).
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'public', 'images')
const MAX_WIDTH = 1920
const JPEG_QUALITY = 80
const WEBP_QUALITY = 82
const PNG_QUALITY = 80

const exts = new Set(['.jpg', '.jpeg', '.png', '.webp'])

async function walk(dir) {
  const out = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = path.join(dir, e.name)
    if (e.isDirectory()) out.push(...(await walk(p)))
    else if (exts.has(path.extname(e.name).toLowerCase())) out.push(p)
  }
  return out
}

async function processFile(absPath, force) {
  const ext = path.extname(absPath).toLowerCase()
  const buf = await fs.readFile(absPath)
  const before = buf.length
  let img = sharp(buf).rotate()

  const meta = await img.metadata()
  const w = meta.width ?? 0
  if (w > MAX_WIDTH) {
    img = img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
  }

  let outBuf
  if (ext === '.png') {
    const hasAlpha = meta.hasAlpha
    if (hasAlpha) {
      outBuf = await img.png({ compressionLevel: 9, adaptiveFiltering: true }).toBuffer()
    } else {
      outBuf = await img.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toBuffer()
    }
  } else if (ext === '.webp') {
    outBuf = await img.webp({ quality: WEBP_QUALITY, effort: 6 }).toBuffer()
  } else {
    outBuf = await img.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer()
  }

  const after = outBuf.length
  const saved = before - after
  const pct = before ? ((saved / before) * 100).toFixed(1) : '0'
  if (saved > 0 || force) {
    if (saved > 0 || (force && after !== before)) {
      await fs.writeFile(absPath, outBuf)
    }
    return { rel: path.relative(path.join(__dirname, '..'), absPath), before, after, saved, pct, wrote: saved > 0 || (force && after < before) }
  }
  return { rel: path.relative(path.join(__dirname, '..'), absPath), before, after, saved, pct, wrote: false }
}

const force = process.argv.includes('--force')

async function main() {
  let paths
  try {
    paths = await walk(ROOT)
  } catch (e) {
    console.error('No folder', ROOT, e.message)
    process.exit(1)
  }
  if (paths.length === 0) {
    console.log('No images under', ROOT)
    return
  }
  console.log(`Found ${paths.length} files under public/images\n`)
  let totalBefore = 0
  let totalAfter = 0
  let wrote = 0
  for (const p of paths) {
    const r = await processFile(p, force)
    totalBefore += r.before
    totalAfter += r.after
    const sign = r.saved >= 0 ? '-' : '+'
    const absKb = (Math.abs(r.saved) / 1024).toFixed(1)
    if (r.wrote) {
      wrote++
      console.log(`✓ ${r.rel}  ${(r.before / 1024).toFixed(0)}KB → ${(r.after / 1024).toFixed(0)}KB (${sign}${absKb} KB, ${r.pct}%)`)
    } else {
      console.log(`· ${r.rel}  skip (already smaller or no gain${force ? '' : '; use --force to overwrite anyway'})`)
    }
  }
  console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`)
  console.log(`Files updated: ${wrote}/${paths.length}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
