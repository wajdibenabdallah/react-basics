import styles from "./Menu.module.css";
import MOCKS from "./Mocks";
import Item from "./Item/Item";
import Card from "../UI/Card";
import React from "react";
import CartContext from "../store/CartContext";

const Meals = () => {
  const ctx = React.useContext(CartContext);

  const addItem = (meal) => (event) => {
    event.preventDefault();
    ctx.addItem(meal);
  };

  return (
    <section className={styles.meals}>
      <Card>
        <ul>
          {MOCKS.map((meal) => (
            <li key={meal.id}>
              <Item meal={meal} addItem={addItem} />
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default Meals;
