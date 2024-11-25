
export function dateHelper(date: string) {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth()
  const day = newDate.getDay()
  return `${day}-${month}-${year}`
}