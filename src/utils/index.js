export const getFilterParams = (products) => {
  const colors = new Set();
  const types = new Set();
  const genders = new Set();
  const range = { max: 0, min: products[0].price };

  for (let product of products) {
    colors.add(product.color);
    types.add(product.type);
    genders.add(product.gender);
    range.max = Math.max(range.max, product.price);
    range.min = Math.min(range.min, product.price);
  }

  return {
    colors,
    types,
    genders,
    range,
  };
};
