export function toNumber(a) {
  const n = parseFloat(a)
  return isNaN(n) ? 0 : n
}
export function isString(s) {
  return typeof s === 'string'
}
