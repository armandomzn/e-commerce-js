import { addToCart } from "./cart/setupCart.js";
import { formatPrice } from "./utils.js";

export const displayProducts = (products, rootContainer) => {
  rootContainer.innerHTML = products
    .map((product) => {
      const { id, name, price, image } = product;
      return `
      <article class="product">
        <div class="product-container">
          <img
            src="${image}"
            alt="${name}"
          />
          <div class="product-icons">
            <a href="./product.html?id=${id}" class="product-search-btn">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <button class="product-cart-btn" data-id="${id}">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <p class="product-price">$${formatPrice(price)}</p>
        </footer>
      </article>
      `;
    })
    .join("");
  rootContainer.addEventListener("click", (e) => {
    const parent = e.target.parentElement;
    if (parent.classList.contains("product-cart-btn")) {
      addToCart(parent.dataset.id);
    }
  });
};
