import "./src/toggleSidebar.js";
import "./src/cart/toggleCart.js";
import "./src/cart/setupCart.js";
import { productsData } from "./src/products-data.js";
import { setupStore, store } from "./src/store.js";
import { displayProducts } from "./src/displayProducts.js";
import { getElement } from "./src/utils.js";

window.addEventListener("DOMContentLoaded", (e) => {
  setupStore(productsData);
  displayProducts(
    store.slice(0, 3),
    getElement(".featured-products-container")
  );
});
