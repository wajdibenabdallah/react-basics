import React from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [total, setTotal] = React.useState(0);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setTotal(items.length);
  }, [items]);

  const cartContext = {
    items: items,
    total: total,
    addItem: (meal) => {
      setItems([...items, meal]);
    },
    removeItem: () => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
