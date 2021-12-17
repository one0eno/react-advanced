import { useContext } from "react";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductButtons = ({ increaseValue = 1 }) => {
  const { increaseBy, counter } = useContext(ProductContext);

  return (
    <div className={styles.buttonsContainer}>
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
