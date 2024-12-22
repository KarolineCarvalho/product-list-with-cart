import SvgComponent from "../SvgComponent";
import styles from "./ListItem.module.css";

interface ListItemProps {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

function ListItem({ name, quantity, price, total }: ListItemProps) {
  return (
    <div className={styles.listItem}>
      <div>
        <p className={styles.name}>{name}</p>
        <div className={styles.priceContaier}>
          <p className={styles.priceContaier__qnty}>{quantity}x</p>
          <p className={styles.priceContaier__price}>@ {price.toFixed(2)}</p>
          <p className={styles.priceContaier__total}>${total.toFixed(2)}</p>
        </div>
      </div>

      <button className={styles.removeItemBtn}>
        <SvgComponent icon="remove_item" alt="remove item" />
      </button>
    </div>
  );
}

export default ListItem;
