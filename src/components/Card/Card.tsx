import styles from "./cardStyles.module.css";

import ResponsiveImage, { ResponsiveImageProps } from "../ResponsiveImage";
import ButtonComponent, { ButtonProps } from "../ButtonComponent";
import { ListItemProps, useCartStore } from "../../store";

export interface CardProps {
  CardImage: ResponsiveImageProps;
  Button: Omit<ButtonProps, "buttonText">;
  itemInfo: ListItemProps;
}

function Card({ CardImage, Button, itemInfo }: CardProps) {
  const cardTopClassList = [styles.card__top];
  const { items, addItem } = useCartStore();
  const isInCart = items.some((obj) => obj.id === itemInfo.id);
  const qty = items.find((obj) => obj.id === itemInfo.id)?.quantity;
  if (isInCart) {
    cardTopClassList.push(styles[`card__top--hasQuantity`]);
  }

  return (
    <div className={styles.card}>
      <div className={cardTopClassList.join(" ")}>
        <ResponsiveImage {...CardImage} />
        <ButtonComponent
          {...Button}
          classList={[styles.card__topButton]}
          buttonText={isInCart ? `${qty}` : " Add to Cart"}
          isChangeQty={isInCart}
          itemId={itemInfo.id}
          onClick={() => addItem(itemInfo)}
        />
      </div>

      <div className={styles.card__bottom}>
        <p className={styles.card__category}>{itemInfo.category}</p>
        <p className={styles.card__name}>{itemInfo.name}</p>
        <p className={styles.card__price}>{`$${itemInfo.price.toFixed(2)}`}</p>
      </div>
    </div>
  );
}

export default Card;
