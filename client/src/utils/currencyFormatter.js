export const formatZAR = (amount) => {
  return 'R' + amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};