import { displayProducts } from "../displayProducts.js";
import { getElement } from "../utils.js";

export const rangeFilter = (store) => {
  const form = getElement(".price-filter");
  const inputRange = getElement(".range-input");
  const priceValue = getElement(".price-value");

  const maxValue = Math.max(...store.map((product) => product.price));
  inputRange.max = maxValue;
  inputRange.min = 0;
  inputRange.value = maxValue;
  priceValue.innerHTML = `Value: $${maxValue}`;

  form.addEventListener("input", (e) => {
    const productContainer = getElement(".products-container");
    productContainer.classList.remove("error");

    const value = parseInt(inputRange.value);
    let newStore = store.filter((product) => {
      return product.price <= value;
    });
    priceValue.innerHTML = `Value: $${value}`;
    displayProducts(newStore, productContainer);
    if (newStore.length === 0) {
      productContainer.classList.add("error");
      productContainer.innerHTML = `<h3>No products match with the search</h3>`;
    }
  });
};
