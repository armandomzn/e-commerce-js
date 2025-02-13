## JS Furniture E-Commerce Frontend Project
This project is a simple e-commerce website that displays products, allows users to add products to a cart, and applies different filters such as search, price range, and company filtering. It uses **HTML**, **CSS**, and **Vanilla JavaScript** for front-end functionality and stores data in `localStorage`.

---

## Features

### Product Display
The products are displayed on the main page, where users can see product names, images, prices, and other details. Each product has a button to add it to the cart, and a link to view the product details page.

### Cart Functionality
- Users can add products to their cart.
- The cart allows users to increase or decrease the quantity of a product.
- Users can remove items from the cart.
- The cart is displayed in an overlay with details such as total items and total cost.
  
### Filters
- **Search Filter**: Allows users to search products by name.
- **Price Range Filter**: Allows users to filter products by a selected price range.
- **Company Filter**: Allows users to filter products by the company.

### Sidebar
A sidebar can be toggled to show and hide, which contains navigation links or other content.

---
## Preview
![furniture-1](https://github.com/user-attachments/assets/a4ab9015-75e7-46f3-8a46-49b39ef2d96d)
![furniture-2](https://github.com/user-attachments/assets/586c3f00-aea7-4eb9-8564-eb0b0e1d7f6f)
![furniture-3](https://github.com/user-attachments/assets/8e44425a-311c-4b50-ae10-a4511a628646)
![furniture-4](https://github.com/user-attachments/assets/c6304d14-86e8-431c-bdfc-09f1aace5203)
![furniture-5](https://github.com/user-attachments/assets/e5546e49-f1a8-48f4-91cd-cf2bf9bb0ada)

---

## Setup

1. Clone the repository to your local machine.
```bash
git clone https://github.com/armandomzn/e-commerce-js.git
```
2. Open the project folder:
```bash
cd e-commerce-js
```
3. Open the `index.html` file in a browser to view the project.

---
## Functions

### `getElement(selection)`
This utility function retrieves an HTML element from the DOM by the provided selector. It throws an error if the element is not found.

### `setStorage(name, item)`
Stores an item in the local storage with the given `name`.

### `getStorage(name)`
Retrieves an item from local storage by the given `name`.

### `formatPrice(price)`
Formats a given price as USD with two decimal points.

### `setupStore(products)`
Sets up the product store, stores it in `localStorage`, and formats the product data.

### `findProduct(id)`
Finds a specific product by its `id` from the product store.

### `displayProducts(products, rootContainer, filters)`
Displays a list of products in a container. Optionally, can include filter logic.

### `addToCart(id)`
Adds a product to the cart by its `id`. Updates the cart count and total price.

### `searchFilter(store)`
Adds functionality to the search input field. Filters products based on user input.

### `rangeFilter(store)`
Adds a price range filter to the page. Filters products based on the selected price range.

### `companiesFilter(store)`
Adds a company filter to the page. Filters products based on the selected company.

### `addProductCart(product)`
Adds a product to the cart section of the page with quantity controls.

### `openCart()`
Opens the cart overlay to display the cart details.

---

### Usage

1. **Adding a product to the cart**: Click the "add to cart" button on any product.
2. **Viewing the cart**: Click the cart button to view cart details.
3. **Applying filters**: Use the search bar, price range slider, or company filter buttons to narrow down the product list.

### Local Storage Usage

- **Products**: Products are stored in local storage under the key `productsStore`.
- **Cart**: The cart items are stored in local storage under the key `cartItems`.

---

#### Live Example

- [You can view a live version of this project here.](https://voluble-malasada-b51b69.netlify.app)
