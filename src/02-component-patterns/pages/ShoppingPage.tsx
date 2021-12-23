import { useState } from "react";

import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import {
  Product,
  ProductInCart,
  InitialValues,
} from "../interfaces/interfaces";
// import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCar } from "../hooks/useShoppingCar";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>Shop</h1>
        <hr />

        <ProductCard key={product.id} product={product} initialValues={{}}>
          {({ reset, maxCount, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )}
        </ProductCard>
      </div>
    </>
  );
};
