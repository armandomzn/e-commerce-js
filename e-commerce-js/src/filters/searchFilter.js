import { displayProducts } from "../displayProducts.js";
import { getElement } from "../utils.js";

export const searchFilter = (store) => {
  const form = getElement(".search-filter");
  const inputForm = getElement(".search-input");
  const productContainer = getElement(".products-container");
  form.addEventListener("keyup", (e) => {
    productContainer.classList.remove("error");

    const value = inputForm.value.toLowerCase();
    if (!value) {
      displayProducts(store, productContainer, true);
      return;
    }
    let newStore = store.filter((product) => {
      const { name } = product;
      if (name.toLowerCase().includes(value) || name.startsWith(value)) {
        return product;
      }
    });
    displayProducts(newStore, productContainer, true);
    if (newStore.length < 1) {
      productContainer.classList.add("error");
      productContainer.innerHTML = `<h3 class="error">No products match with the search</h3>`;
    }
  });
};
