const express = require('express');
const { resolve } = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Flip Deal array product objects
let products = [
  {
    id: 1,
    name: 'Xiaomi iPhone 12',
    brand: 'Xiaomi',
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 2,
    name: 'Oppo Mi 10',
    brand: 'Xiaomi',
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 3,
    name: 'Samsung Mi 10',
    brand: 'Oppo',
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 4,
    name: 'Apple Find X2',
    brand: 'Samsung',
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 48,
  },
  {
    id: 5,
    name: 'Oppo Mi 11',
    brand: 'Xiaomi',
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 6,
    name: 'OnePlus Find X3',
    brand: 'Apple',
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 7,
    name: 'Apple Pixel 5',
    brand: 'Apple',
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 8,
    name: 'Google Mi 10',
    brand: 'Oppo',
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 108,
  },
  {
    id: 9,
    name: 'Oppo Mi 11',
    brand: 'Samsung',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 24,
  },
  {
    id: 10,
    name: 'Xiaomi Mi 10',
    brand: 'Oppo',
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 11,
    name: 'OnePlus Pixel 5',
    brand: 'Apple',
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 12,
  },
  {
    id: 12,
    name: 'Xiaomi OnePlus 8',
    brand: 'Xiaomi',
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: 'Android',
    camera: 48,
  },
  {
    id: 13,
    name: 'Xiaomi Pixel 6',
    brand: 'Oppo',
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 108,
  },
  {
    id: 14,
    name: 'Samsung Find X2',
    brand: 'Oppo',
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: 'Android',
    camera: 48,
  },
  {
    id: 15,
    name: 'Google OnePlus 8',
    brand: 'Apple',
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: 'iOS',
    camera: 24,
  },
  {
    id: 16,
    name: 'OnePlus iPhone 12',
    brand: 'OnePlus',
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: 'iOS',
    camera: 64,
  },
  {
    id: 17,
    name: 'Google Mi 11',
    brand: 'Oppo',
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: 'Android',
    camera: 64,
  },
  {
    id: 18,
    name: 'Google OnePlus 9',
    brand: 'Apple',
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: 'Android',
    camera: 64,
  },
  {
    id: 19,
    name: 'Oppo Galaxy S22',
    brand: 'Samsung',
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: 'Android',
    camera: 12,
  },
  {
    id: 20,
    name: 'Apple Pixel 5',
    brand: 'Oppo',
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: 'Android',
    camera: 108,
  },
];
// Given product objects array, sort the product objects in popularity(descending order by rating).
function sortByPopularity(prod1, prod2) {
  return prod2.rating - prod1.rating;
}

// Given product objects array, sort the product objects high-to-low price (descending order by price).
function sortByPriceHighToLow(prod1, prod2) {
  return prod2.price - prod1.price;
}

// Given product objects array, sort the product objects low-to-high price (ascending order by price).
function sortByPriceLowToHigh(prod1, prod2) {
  return prod1.price - prod2.price;
}

// Given a products array element of type object and desired RAM as arguments, check if RAM of product object matches with the desired RAM.
function filterByRAM(eleObj, desiredRAM) {
  return eleObj.ram === desiredRAM;
}

// Given a products array element of type object and desired ROM as arguments, check if ROM of product object matches with the desired ROM.
function filterByROM(eleObj, desiredROM) {
  return eleObj.rom === desiredROM;
}

// Given a products array element of type object and desired brand as arguments, check if brand of product object matches with the desired brand.
function filterByBrand(eleObj, desiredBrand) {
  return eleObj.brand.toLowerCase() === desiredBrand.toLowerCase();
}

// Given a products array element of type object and desired OS as arguments, check if OS of product object matches with the desired OS.
function filterByOs(eleObj, desiredOs) {
  return eleObj.os.toLowerCase() === desiredOs.toLowerCase();
}

// Given a products array element of type object and max price as arguments, check if price of product object is less than or equal to  the max price.
function filterByPrice(eleObj, maxPrice) {
  return eleObj.price <= maxPrice;
}

// Endpoint 1: Sort products by popularity (descending order by rating)
app.get('/products/sort/popularity', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByPopularity);
  res.json({ products: sortedProducts });
});

// Endpoint 2: Sort products by price high-to-low (descending order by price)
app.get('/products/sort/price-high-to-low', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByPriceHighToLow);
  res.json({ products: sortedProducts });
});

// Endpoint 3: Sort products by price low-to-hig (descending order by price)
app.get('/products/sort/price-low-to-high', (req, res) => {
  let sortedProducts = products.slice();
  sortedProducts.sort(sortByPriceLowToHigh);
  res.json({ products: sortedProducts });
});

// Endpoint 4: Given an array of products (each element is an object), return only the products having RAM same as desired RAM given as query param
app.get('/products/filter/ram', (req, res) => {
  let desiredRAM = parseInt(req.query.ram);
  let sortedProducts = products.filter((eleObj) =>
    filterByRAM(eleObj, desiredRAM)
  );
  res.json({ products: sortedProducts });
});

// Endpoint 5: Given an array of products (each element is an object), return only the products having ROM same as desired ROM given as query param
app.get('/products/filter/rom', (req, res) => {
  let desiredROM = parseInt(req.query.rom);
  let sortedProducts = products.filter((eleObj) =>
    filterByROM(eleObj, desiredROM)
  );
  res.json({ products: sortedProducts });
});

// Endpoint 6: Given an array of products (each element is an object), return only the products having brand same as desired brand given as query param
app.get('/products/filter/brand', (req, res) => {
  let desiredBrand = req.query.brand;
  let sortedProducts = products.filter((eleObj) =>
    filterByBrand(eleObj, desiredBrand)
  );
  res.json({ products: sortedProducts });
});

// Endpoint 7: Given an array of products (each element is an object), return only the products having OS same as desired OS given as query param
app.get('/products/filter/os', (req, res) => {
  let desiredOs = req.query.os;
  let sortedProducts = products.filter((eleObj) =>
    filterByOs(eleObj, desiredOs)
  );
  res.json({ products: sortedProducts });
});

// Endpoint 8: Given an array of products (each element is an object), return only the products having price less than or equal to max price given as query param.
app.get('/products/filter/price', (req, res) => {
  let maxPrice = parseInt(req.query.price);
  let sortedProducts = products.filter((eleObj) =>
    filterByPrice(eleObj, maxPrice)
  );
  res.json({ products: sortedProducts });
});

// Endpoint 9: Given an array of products (each element is an object), return it in json format.
app.get('/products', (req, res) => {
  let sortedProducts = products.slice();
  res.json({ products: sortedProducts });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
