export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw Error(`The element ${selection} does not exist`);
};

export const setStorage = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};

export const getStorage = (name) => {
  const existStorage = localStorage.getItem(name);
  return existStorage ? JSON.parse(localStorage.getItem(name)) : [];
};

export const formatPrice = (price) => {
  const formatPrice = new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(price);
  return formatPrice;
};
