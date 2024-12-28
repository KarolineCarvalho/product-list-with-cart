import styles from "./cartStyles.module.css";
import ListItem from "../ListItem";
import SvgComponent from "../SvgComponent";
import { ListItemProps } from "../../store";
import ButtonComponent from "../ButtonComponent";

export const calculateTotalPrice = (items: ListItemProps[]) => {
  return items.reduce(
    (total, item) => total + item.price * (item.quantity ?? 0),
    0
  );
};

export const calculateTotalItems = (items: ListItemProps[]) => {
  return items.reduce((total, item) => total + (item.quantity ?? 0), 0);
};

export function OrderTotal({ items }: { items: ListItemProps[] }) {
  return (
    <>
      <div className={styles.cart__totalContainer}>
        <p className={styles.cart__totalText}>Order Total</p>
        <p className={styles.cart__totalValue}>{`$${calculateTotalPrice(
          items
        ).toFixed(2)}`}</p>
      </div>
    </>
  );
}

interface CartProps {
  items: ListItemProps[];
  openModal: () => void;
}

function Cart({ items, openModal }: CartProps) {
  return (
    <div className={styles.cart}>
      <h2 className={styles.cart__title}>
        Your Cart ({calculateTotalItems(items)})
      </h2>

      {!items.length && (
        <div className={styles.cart__empty}>
          <SvgComponent
            icon="illustration_empty_cart"
            alt="Empty cart illustration"
          />
          <p className={styles.cart__emptyText}>
            Your added items will appear here
          </p>
        </div>
      )}

      {!!items.length && (
        <>
          {items.map((item) => {
            return (
              <ListItem
                key={item.id}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}

          <OrderTotal items={items} />
          <div className={styles.cart__carbonNeutral}>
            <SvgComponent icon="carbon_neutral" alt="Carbon Neutral" />
            <p>
              This is a <strong>carbon-neutral</strong> delivery
            </p>
          </div>
          <ButtonComponent
            buttonText="Confirm Order"
            variant="confirm"
            onClick={openModal}
          />
        </>
      )}
    </div>
  );
}

export default Cart;
