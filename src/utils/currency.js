/**
 * Formats a number to Indian Rupee (₹) format
 * @param {number} amount
 * @returns {string} e.g. "₹499"
 */
export const formatCurrency = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) return '₹0';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Calculates discount percentage
 * @param {number} price
 * @param {number} oldPrice
 * @returns {number} e.g. 50
 */
export const calculateDiscount = (price, oldPrice) => {
  if (!oldPrice || oldPrice <= price) return 0;
  return Math.round(((oldPrice - price) / oldPrice) * 100);
};
