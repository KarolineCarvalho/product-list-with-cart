import styles from "./cardStyles.module.css";

import ResponsiveImage, { ResponsiveImageProps } from "../ResponsiveImage";
import ButtonComponent, { ButtonProps } from "../ButtonComponent";

export interface CardProps {
  CardImage: ResponsiveImageProps;
  Button: ButtonProps;
  itemInfo: { category: string; name: string; price: number };
  hasQuantity?: boolean;
}

function Card({ CardImage, Button, itemInfo, hasQuantity }: CardProps) {
  const cardTopClassList = [styles.card__top];
  if (hasQuantity) cardTopClassList.push(styles[`card__top--hasQuantity`]);

  return (
    <div className={styles.card}>
      <div className={cardTopClassList.join(" ")}>
        <ResponsiveImage {...CardImage} />
        <ButtonComponent {...Button} />
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
