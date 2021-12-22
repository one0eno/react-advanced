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
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCar } from "../hooks/useShoppingCar";

const product = products[0];

export const ShoppingPage = () => {
  return (
    <>
      <div>
        <h1>Shop</h1>
        <hr />

        <ProductCard
          key={product.id}
          product={product}
          className="bg-dark text-white "
          initialValues={{ count: 4, maxCount: 10 }}
        >
          {({ reset, maxCount, isMaxCountReached, increaseBy, count }) => (
            <>
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-button" />
              <button onClick={reset}>Rest</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(+2)}>+2</button>
              )}
              <span>
                {count} - {maxCount}{" "}
              </span>
            </>
          )}
        </ProductCard>
      </div>
    </>
  );
};
