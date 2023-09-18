import { getElement } from "../utils.js";

const cartOverlay = getElement(".cart-overlay");
const toggleCartBtn = getElement(".toggle-cart-btn");
const cartCloseBtn = getElement(".cart-close-btn");

toggleCartBtn.addEventListener("click", (e) => {
  cartOverlay.classList.add("show-cart-overlay");
});

cartCloseBtn.addEventListener("click", (e) => {
  cartOverlay.classList.remove("show-cart-overlay");
});

export const openCart = () => {
  cartOverlay.classList.add("show-cart-overlay");
};
