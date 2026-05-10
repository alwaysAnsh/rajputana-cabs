/** Rough road-time estimate for customer expectations */
export function estimateDuration(distanceKm: number): string {
  const hours = distanceKm / 45
  if (hours < 1) {
    const mins = Math.max(20, Math.round((distanceKm / 40) * 60))
    return `~${mins} min`
  }
  const h = Math.floor(hours)
  const m = Math.round((hours - h) * 60)
  if (m <= 0) return `~${h} hr`
  return `~${h} hr ${m} min`
}
