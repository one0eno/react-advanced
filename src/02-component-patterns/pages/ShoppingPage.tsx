import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee mug",
  img: "coffee-mug.png",
  increaseValue: 1,
};
export const ShoppingPage = () => {
  return (
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
        <ProductCard product={product} className="bg-dark text-white ">
          <ProductCard.Image className="custom-image" />
          <ProductCard.Title className="text-bold" />
          <ProductCard.Buttons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white ">
          <ProductImage
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-button" />
        </ProductCard>

        <ProductCard product={product} style={{ backgroundColor: "#70d1f8" }}>
          <ProductImage
            style={{ boxShadow: "10px 10px 10px rgba(0,0,0,0.2)" }}
          />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
