export function calculateFare(distanceKm: number, ratePerKm: number) {
  const oneWay = distanceKm * ratePerKm
  const roundTrip = oneWay * 2
  const driverAllowance = distanceKm > 150 ? 200 : 0
  return {
    oneWay: Math.round(oneWay),
    roundTrip: Math.round(roundTrip),
    perKm: ratePerKm,
    driverAllowance,
    note:
      distanceKm > 150
        ? 'Driver allowance of ₹200/night applicable for outstation'
        : 'No extra charges for local trips',
  }
}
