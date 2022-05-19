import React from "react";
import styles from "./ItemForm.module.css";

const ItemForm = ({addItem}) => {
  return (
    <form className={styles.form} onSubmit={addItem}>
      <button>Add</button>
    </form>
  );
};

export default ItemForm;
