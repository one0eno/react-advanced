import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  increaseValue?: number;
  className?: string;
  style?: React.CSSProperties;
  value?: number;
}

export const ProductButtons = ({
  increaseValue = 1,
  className,
  style,
}: Props) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        onClick={() => increaseBy(-increaseValue)}
        className={styles.buttonMinus}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(increaseValue)}
        className={styles.buttonAdd}
      >
        +
      </button>
    </div>
  );
};
