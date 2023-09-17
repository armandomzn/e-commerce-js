export const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw Error(`The element ${selection} does not exist`);
};
