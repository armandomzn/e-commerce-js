import { formatPrice, getElement } from "../utils.js";

const cartItems = getElement(".cart-items");
export const addProductCart = (product) => {
  const { id, price, name, image, amount } = product;
  const article = document.createElement("article");
  article.setAttribute("data-id", id);
  article.classList.add("cart-item");
  article.innerHTML = `
        <img
              src="${image}"
              alt="${name}"
              class="cart-img"
        />
        <div class="cart-info">
            <h4 class="cart-info-name">${name}</h4>
            <p class="cart-info-price">$${formatPrice(price)}</p>
            <button class="cart-info-remove-btn btn" data-id="${id}">remove</button>
        </div>
        <div class="cart-info-btn">
            <button class="cart-info-increase-btn" data-id="${id}">
            <i class="fa-solid fa-chevron-up"></i>
            </button>
            <span class="cart-info-quantity" data-id="${id}">${amount}</span>
            <button class="cart-info-decrease-btn" data-id="${id}">
            <i class="fa-solid fa-chevron-down"></i>
            </button>
        </div>
`;

  cartItems.appendChild(article);
};
