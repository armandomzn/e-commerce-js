import { getStorage, setStorage } from "./utils.js";

export let store = getStorage("productsStore");
export const setupStore = (products) => {
  store = products.map((product) => {
    const {
      id,
      fields: { company, featured, price, name, image, colors, description },
    } = product;
    return {
      id,
      company,
      featured,
      price,
      name,
      image,
      colors,
      description,
    };
  });
  setStorage("productsStore", store);
};

export const findProduct = (id) => {
  return store.find((product) => {
    return product.id === id;
  });
};
