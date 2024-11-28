
export function dateHelper(date: string) {
  const newDate = new Date(date)
  const year = newDate.getFullYear()
  const month = newDate.getMonth()+1;
  const dataDate = newDate.getDate()
  return `${dataDate}-${month}-${year}`
}