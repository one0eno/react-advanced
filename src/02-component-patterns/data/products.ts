import { Product } from "../interfaces/interfaces";

const product = {
  id: "1",
  title: "Coffee mug",
  img: "coffee-mug.png",
  increaseValue: 1,
};

const product2 = {
  id: "2",
  title: "Coffee mug 2",
  img: "coffee-mug2.png",
  increaseValue: 1,
};

export const products: Product[] = [product, product2];
