import { displayProducts } from "../displayProducts.js";
import { getElement } from "../utils.js";

export const companiesFilter = (store) => {
  const companiesContainer = getElement(".companies-btn-container");
  const productsContainer = getElement(".products-container");
  const companyBtns = [
    "all",
    ...new Set(store.map((product) => product.company)),
  ];
  companiesContainer.innerHTML = companyBtns
    .map((company) => {
      return ` <button class="btn company-btn">${company}</button>`;
    })
    .join("");
  companiesContainer.addEventListener("click", (e) => {
    productsContainer.classList.remove("error");
    if (!e.target.classList.contains("company-btn")) {
      return;
    }
    let newStore = [];
    switch (e.target.textContent) {
      case "all":
        newStore = [...store];
        break;

      default:
        newStore = store.filter((product) => {
          return product.company === e.target.textContent;
        });
    }
    displayProducts(newStore, productsContainer, true);
  });
};
