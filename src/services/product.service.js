export const getProducts = async ({ page }) => {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  return data.products;
};

export const getProductById = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};
