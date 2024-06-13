export const formatDate = (string: Date, separator: string) => {
  const date = new Date(string);

  let day: string | number = date.getUTCDate();
  let month: string | number = date.getUTCMonth() + 1;
  const year = date.getUTCFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  return day + separator + month + separator + year;
};
