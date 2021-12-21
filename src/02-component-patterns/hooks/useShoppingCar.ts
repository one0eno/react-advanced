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
      const productInCart: ProductInCart = oldShoppingCar[product.id] || {
        ...product,
        count: 0,
      };

      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCar,
          [product.id]: productInCart,
        };
      }

      const { [product.id]: toDelete, ...rest } = oldShoppingCar;

      return {
        ...rest,
      };

      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCar;

      //   return {
      //     ...rest,
      //   };
      // }

      // return {
      //   ...oldShoppingCar,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return {
    ShoppingCart,
    onProductCountChange,
  };
};
