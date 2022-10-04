export const convertDate = (date: string) => {
  return date.split('-').reverse().join('/');
};

export const getYear = (date: string) => {
  return date.split('-')[0];
};
