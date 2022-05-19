import React from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../store/CartContext";

const HeaderCartButton = (props) => {
  const ctx = React.useContext(CartContext);
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Panier</span>
      <span className={styles.badge}>{ctx.total}</span>
    </button>
  );
};

export default HeaderCartButton;
