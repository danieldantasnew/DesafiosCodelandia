export function stringToDate(date: string) {
  const partsOfDate = date.split('T');
  const partOfDate = partsOfDate[0].split('-');
  const partOfTime = partsOfDate[1].split(':');
  const dateMatch = new Date(+partOfDate[0], +partOfDate[1] - 1, +partOfDate[2], +partOfTime[0], +partOfTime[1]);

  return dateMatch;
}