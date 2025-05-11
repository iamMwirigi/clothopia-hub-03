
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'KSH',
    minimumFractionDigits: 2
  }).format(amount);
};
