import { useState } from "react";

import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import { Product, ProductInCart } from "../interfaces/interfaces";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCar } from "../hooks/useShoppingCar";

export const ShoppingPage = () => {
  const { ShoppingCart, onProductCountChange } = useShoppingCar();

  return (
    <>
      <div>
        <h1>Shop</h1>
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {/* <ProductCard product={product} className="bg-dark text-white ">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard> */}
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark text-white "
              value={ShoppingCart[product.id]?.count || 0}
              onChange={onProductCountChange}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />
              <ProductTitle className="text-bold" />
              <ProductButtons className="custom-button" />
            </ProductCard>
          ))}
        </div>
        <div className="shopping-cart">
          {Object.entries(ShoppingCart).map(([key, product]) => (
            <ProductCard
              key={key}
              product={product}
              className="bg-dark text-white "
              style={{ width: "100px" }}
              onChange={onProductCountChange}
              value={product.count}
            >
              <ProductImage
                className="custom-image"
                style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
              />

              <ProductButtons className="custom-button" />
            </ProductCard>
          ))}
        </div>
      </div>
    </>
  );
};
