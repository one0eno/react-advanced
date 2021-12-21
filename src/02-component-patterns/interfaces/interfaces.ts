import { ReactElement } from "react";
import { Props as productCardProps } from "../components/ProductCard";
import { Props as ProductdTitleProps } from "../components/ProductTitle";
import { Props as ProductdImageProps } from "../components/ProductImage";
import { Props as ProductButtonProps } from "../components/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: productCardProps): JSX.Element;
  Title: (Props: ProductdTitleProps) => JSX.Element;
  Image: (Props: ProductdImageProps) => JSX.Element;
  Buttons: (Props: ProductButtonProps) => JSX.Element;
}
export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}
