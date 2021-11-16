export const toFormatDateWithMonth = (dateStr?: string) => {
  let date = new Date(dateStr || '');
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(date);
  let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(date);
  return `${mo} ${ye}`;
}