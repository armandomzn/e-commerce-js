import { findProduct } from "../store.js";
import { formatPrice, getElement, getStorage, setStorage } from "../utils.js";
import { addProductCart } from "./addProductCart.js";
import { openCart } from "./toggleCart.js";

const itemsCount = getElement(".cart-count-item");
const cartTotal = getElement(".cart-total");
const cartContainer = getElement(".cart-items");

let cart = getStorage("cartItems");

export const addToCart = (id) => {
  let product = cart.find((product) => product.id === id);
  // if product not exist we add it
  if (!product) {
    let product = findProduct(id);
    product = { ...product, amount: 1 };
    cart = [...cart, product];
    addProductCart(product);
  } else {
    const amount = updateCartItemCount(id, "sum");
    const cartItems = [...document.querySelectorAll(".cart-info-quantity")];
    const item = cartItems.find((item) => item.dataset.id === id);
    item.textContent = amount;
  }
  displayItemsCount();
  displayItemsTotal();
  setStorage("cartItems", cart);
  openCart();
};

function displayItemsCount() {
  const itemsCounts = cart.reduce((total, { amount }) => {
    return total + amount;
  }, 0);
  itemsCount.innerHTML = itemsCounts;
}

function displayItemsTotal() {
  const itemsTotal = cart.reduce((total, { amount, price }) => {
    return total + price * amount;
  }, 0);
  cartTotal.innerHTML = `total: $${formatPrice(itemsTotal)}`;
}

function updateCartItemCount(id, operation) {
  let newAmount;
  cart = cart.map((product) => {
    if (product.id === id) {
      newAmount = operation === "sum" ? product.amount + 1 : product.amount - 1;
      return { ...product, amount: newAmount };
    }
    return product;
  });
  return newAmount;
}

function displayCartItems() {
  cart.forEach((product) => {
    addProductCart(product);
  });
}

function removeItemFromCart(id) {
  cart = cart.filter((product) => {
    return product.id !== id;
  });
}

function mainCartFunctionality() {
  cartContainer.addEventListener("click", (e) => {
    const element = e.target;
    if (element.parentElement.classList.contains("cart-info-increase-btn")) {
      const newAmount = updateCartItemCount(
        element.parentElement.dataset.id,
        "sum"
      );
      element.parentElement.nextElementSibling.textContent = newAmount;
    }
    if (element.parentElement.classList.contains("cart-info-decrease-btn")) {
      const newAmount = updateCartItemCount(
        element.parentElement.dataset.id,
        "sub"
      );
      if (newAmount === 0) {
        removeItemFromCart(e.target.parentElement.dataset.id);
        element.parentElement.parentElement.parentElement.remove();
      } else {
        element.parentElement.previousElementSibling.textContent = newAmount;
      }
    }
    if (element.classList.contains("cart-info-remove-btn")) {
      removeItemFromCart(element.dataset.id);
      element.parentElement.parentElement.remove();
    }
    displayItemsCount();
    displayItemsTotal();
    setStorage("cartItems", cart);
  });
}

const start = () => {
  // display item count for cart
  displayItemsCount();
  // display the total of items cart in the cart sidebar
  displayItemsTotal();
  // display cart items which are in the local storage
  displayCartItems();
  // gives main functionality to the buttons inside the cart and updated the dom within
  mainCartFunctionality();
};

start();
