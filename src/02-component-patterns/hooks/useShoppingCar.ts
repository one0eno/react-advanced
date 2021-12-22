import React, { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCar = () => {
  const [ShoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldShoppingCar) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCar;

        return {
          ...rest,
        };
      }

      return {
        ...oldShoppingCar,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    ShoppingCart,
    onProductCountChange,
  };
};
