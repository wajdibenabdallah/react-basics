import React from "react";
import Header from "./Layout/Header";
import Menu from "./Meals/Menu";
import CartProvider from "./store/CartProvider";

const FoodOrder = () => {
  return (
    <CartProvider>
      <React.Fragment>
        <Header />
        <main>
          <Menu />
        </main>
      </React.Fragment>
    </CartProvider>
  );
};

export default FoodOrder;
