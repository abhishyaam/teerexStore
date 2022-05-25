export const getProducts = async () => {
  try {
    const url = `https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`;

    const response = await fetch(url);
    return response.json();
  } catch (error) {
    throw error;
  }
};
