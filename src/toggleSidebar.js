import { getElement } from "./utils.js";

const sidebar = getElement(".sidebar");
const toggleBtn = getElement(".toggle-btn");
const closeBtn = getElement(".close-btn");

toggleBtn.addEventListener("click", (e) => {
  sidebar.classList.add("show-sidebar");
});

closeBtn.addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});
