import { useEffect, useState } from "react";
import styles from "./modalStyles.module.css";
import { useCartStore } from "../../store";
import ListItem from "../ListItem";
import SvgComponent from "../SvgComponent";
import { OrderTotal } from "../Cart";
import ButtonComponent from "../ButtonComponent";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { items, clearCart } = useCartStore();

  const handleClose = () => {
    if (window.scrollTo) {
      window.scrollTo({ behavior: "smooth", top: 0 });
    } else {
      document.documentElement.scrollTop = 0;
    }
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setScrollPosition(window.scrollY);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={styles.modal__overlay}
      onClick={onClose}
      style={{ top: `${scrollPosition}px`, position: "absolute" }}
    >
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <SvgComponent icon="order_confirmed" alt="Order confirmed" />
        <h2 className={styles.modal__title}>Order Confirmed</h2>
        <p className={styles.modal__subtitle}>We hope you enjoy your food!</p>

        <div className={styles.modal__itemsContainer}>
          {items.map((item) => {
            return <ListItem key={item.id} isConfirmationList {...item} />;
          })}

          <OrderTotal items={items} />
        </div>

        <ButtonComponent
          buttonText="Start New Order"
          variant="confirm"
          onClick={() => {
            clearCart();
            handleClose();
          }}
        />
      </div>
    </div>
  );
};

export default Modal;
