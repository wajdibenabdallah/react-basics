import styles from "./Item.module.css";
import ItemForm from "./ItemForm";

const Item = ({ meal, addItem }) => {
  return (
    <div className={styles.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={styles.description}>{meal.description}</div>
        <div className={styles.price}>{`${meal.price.toFixed(2)} €`}</div>
      </div>
      <ItemForm addItem={addItem(meal)} />
    </div>
  );
};

export default Item;
