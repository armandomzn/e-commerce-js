import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import { store } from "../store.js";
import { formatPrice, getElement } from "../utils.js";
import { addToCart } from "../cart/setupCart.js";

const sectionCenter = getElement(".single-products .section-center");
const pageName = getElement(".page-name");

window.addEventListener("DOMContentLoaded", (e) => {
  const productId = new URL(window.location).searchParams.get("id");
  const product = store.find((product) => {
    return product.id === productId;
  });
  if (!productId || !product) {
    window.location.href = "products.html";
    return;
  }
  const { id, name, price, image, description, company, colors } = product;
  pageName.textContent = `Home / ${name}`;
  document.title = `E-Commerce | ${name}`;
  sectionCenter.innerHTML = `
    <article class="single-product">
          <img
            src="${image}"
            alt="${name}"
            class="single-product-img"
          />
          <div class="single-product-info">
            <h2 class="single-product-name">${name}</h2>
            <p class="single-product-company">${company}</p>
            <p class="single-product-price">$${formatPrice(price)}</p>
            <div class="single-product-color-container">
              ${colors
                .map((color) => {
                  return `<span class="single-product-color" style="background-color:${color}"></span>`;
                })
                .join("")}
            </div>
            <p class="single-product-description">
              ${description}
            </p>
            <button class="btn single-product-btn">add to cart</button>
          </div>
        </article>
  `;
  getElement(".single-product-btn").addEventListener("click", (e) => {
    addToCart(id);
  });
});
