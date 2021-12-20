import { useState } from "react";

import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import { Product } from "../interfaces/interfaces";
import "../styles/custom-styles.css";

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

const products: Product[] = [product, product2];

interface ProductInCart extends Product {
  count: number;
}

export const ShoppingPage = () => {
  const [ShoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({
    "1": { ...product, count: 10 },
    "2": { ...product2, count: 2 },
  });

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    console.log("as", count);
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
          <ProductCard
            product={product2}
            className="bg-dark text-white "
            style={{ width: "100px" }}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />

            <ProductButtons className="custom-button" />
          </ProductCard>
          <ProductCard
            product={product}
            className="bg-dark text-white "
            style={{ width: "100px" }}
          >
            <ProductImage
              className="custom-image"
              style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
            />

            <ProductButtons className="custom-button" />
          </ProductCard>
        </div>
      </div>
    </>
  );
};
