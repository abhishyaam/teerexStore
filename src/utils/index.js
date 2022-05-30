export const getFilterParams = (products) => {
  const colors = new Set();
  const types = new Set();
  const genders = new Set();
  let maxPrice = 0;

  for (let product of products) {
    colors.add(product.color);
    types.add(product.type);
    genders.add(product.gender);
    maxPrice = Math.max(maxPrice, product.price);
  }
  let prices = [];
  for (let price = 0; price <= maxPrice; price = price + 250) {
    prices.push(price);
  }
  return {
    colors: [...colors],
    types: [...types],
    genders: [...genders],
    maxPrice,
  };
};
