import Product from "../models/Product";

const products: Product[] = [
  {
    name: "Lemon",
    price: 10,
  },
  {
    name: "Orange",
    price: 7,
  },
  {
    name: "Kiwi",
    price: 5,
  },
];

const calcAverageProductPrice = (array: Product[]): number => {
  if (array.length > 0) {
    let sum: number = 0;
    array.forEach((item) => (sum += item.price));
    return sum / array.length;
  } else {
    return 0;
  }
};

// const averageProductPrice: number = calcAverageProductPrice(products);
// const averageProductPrice: number = calcAverageProductPrice([]);
// console.log(averageProductPrice);

export { calcAverageProductPrice };
