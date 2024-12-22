import React from "react";
import styles from "./cartStyles.module.css";
import ListItem from "../ListItem";

export interface CartProps {
  itemsQnty: number;
}

function Card({ itemsQnty }: CartProps) {
  // const cardTopClassList = [styles.card_top];
  // if (hasQuantity) cardTopClassList.push(styles[`card_top--hasQuantity`]);

  return (
    <div className={styles.cart}>
      <h2>Your Cart {itemsQnty}</h2>
      <ListItem
        name={"Classic Tiramissu"}
        quantity={1}
        price={5.5}
        total={5.5}
      />
    </div>
  );
}

export default Card;
