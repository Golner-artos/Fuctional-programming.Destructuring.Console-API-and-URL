const products = [
  { name: "Ноутбук", category: "Электроника", price: 25000, quantity: 5, rating: 4.7 },
  { name: "Смартфон", category: "Электроника", price: 18000, quantity: 10, rating: 4.5 },
  { name: "Мышь", category: "Аксессуары", price: 500, quantity: 40, rating: 4.2 },
  { name: "Клавиатура", category: "Аксессуары", price: 1200, quantity: 25, rating: 4.4 },
  { name: "Книга JavaScript", category: "Книги", price: 350, quantity: 60, rating: 4.9 },
  { name: "Наушники", category: "Электроника", price: 2500, quantity: 15, rating: 3.9 }
];
 
Object.freeze(products);
products.forEach(Object.freeze);
 
const getProductNames = (items) => items.map(({ name }) => name);
 
const filterByCategory = (items, category) =>
  items.filter((item) => item.category === category);
 
const sortByPrice = (items, ascending = true) =>
  [...items].sort((a, b) => (ascending ? a.price - b.price : b.price - a.price));
 
const getTotalValue = (items) =>
  items.reduce((total, { price, quantity }) => total + price * quantity, 0);
 
const applyDiscount = (items, discountPercent) =>
  items.map((item) => ({
    ...item,
    price: Math.round(item.price * (1 - discountPercent / 100))
  }));
 
const getMostPopular = (items) =>
  items.reduce((best, current) => (current.rating > best.rating ? current : best));
 
console.log("1) Названия всех товаров:");
console.log(getProductNames(products));
 
console.log("\n2) Товары категории «Электроника»:");
console.log(filterByCategory(products, "Электроника"));
 
console.log("\n3) Сортировка по цене (по возрастанию):");
console.log(sortByPrice(products));
 
console.log("\n   Сортировка по цене (по убыванию):");
console.log(sortByPrice(products, false));
 
console.log("\n4) Общая стоимость товаров на складе:");
console.log(getTotalValue(products));
 
console.log("\n5) Товары со скидкой 10%:");
const discountedProducts = applyDiscount(products, 10);
console.log(discountedProducts);
 
console.log("\n6) Самый популярный товар по рейтингу:");
console.log(getMostPopular(products));
 
console.log("\nИсходный массив без изменений (первый товар):");
console.log(products[0]);
console.log("Исходная цена ноутбука:", products[0].price);
console.log("Цена ноутбука со скидкой:", discountedProducts[0].price);