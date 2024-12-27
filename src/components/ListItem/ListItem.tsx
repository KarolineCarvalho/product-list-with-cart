import { ListItemProps, useCartStore } from "../../store";
import SvgComponent from "../SvgComponent";
import styles from "./ListItem.module.css";

function ListItem({
  id,
  name,
  quantity,
  price,
  thumbnail,
  isConfirmationList,
}: ListItemProps & { isConfirmationList?: boolean }) {
  const { removeItem } = useCartStore();

  const listItemClassList = [styles.listItem];

  if (isConfirmationList) {
    listItemClassList.push(styles[`listItem--confirmation`]);

    return (
      <div className={listItemClassList.join(" ")}>
        <img
          className={styles.listItem__thumbnail}
          src={thumbnail}
          alt={name}
        />
        <div>
          <p className={[styles.name, styles["name--confirmation"]].join(" ")}>
            {name}
          </p>
          <div className={styles.priceContaier}>
            <p className={styles.priceContaier__qty}>{quantity}x</p>
            <p className={styles.priceContaier__price}>@ {price.toFixed(2)}</p>
          </div>
        </div>

        <p
          className={[
            styles.priceContaier__total,
            styles["priceContaier__total--confirmation"],
          ].join(" ")}
        >
          ${(quantity ? price * quantity : price).toFixed(2)}
        </p>
      </div>
    );
  }

  return (
    <div className={styles.listItem}>
      <div>
        <p className={styles.name}>{name}</p>
        <div className={styles.priceContaier}>
          <p className={styles.priceContaier__qty}>{quantity}x</p>
          <p className={styles.priceContaier__price}>@ {price.toFixed(2)}</p>
          <p className={styles.priceContaier__total}>
            ${(quantity ? price * quantity : price).toFixed(2)}
          </p>
        </div>
      </div>

      <button className={styles.removeItemBtn} onClick={() => removeItem(id)}>
        <SvgComponent icon="remove_item" alt="remove item" />
      </button>
    </div>
  );
}

export default ListItem;
