import "../toggleSidebar.js";
import "../cart/toggleCart.js";
import "../cart/setupCart.js";
import { displayProducts } from "../displayProducts.js";
import { store } from "../store.js";
import { getElement } from "../utils.js";
import { searchFilter } from "../filters/searchFilter.js";
import { companiesFilter } from "../filters/companiesFilter.js";
import { rangeFilter } from "../filters/rangeFilter.js";

displayProducts(store, getElement(".products-container"));
searchFilter(store);
companiesFilter(store);
rangeFilter(store);
