import styles from "./ButtonStyle.module.css";
import SvgComponent from "../SvgComponent";
import { ButtonHTMLAttributes } from "react";
import { useCartStore } from "../../store";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  itemId?: string;
  buttonText: string;
  variant: "default" | "confirm";
  isChangeQty?: boolean;
  classList?: string[];
}

function ButtonComponent({
  buttonText,
  isChangeQty,
  variant,
  classList,
  itemId,
  ...props
}: ButtonProps) {
  const { increase, decrease } = useCartStore();

  const buttonClassList = [styles.button];
  buttonClassList.push(styles[`button--${variant}`]);

  if (classList) buttonClassList.push(classList.join(" "));

  if (variant === "default" && isChangeQty)
    buttonClassList.push(styles[`button--${"changeQty"}`]);

  if (isChangeQty && variant === "default") {
    return (
      <div className={buttonClassList.join(" ")}>
        <button
          className={styles.buttonToggle}
          onClick={() => decrease(itemId)}
        >
          <SvgComponent icon="decrement_quantity" alt="Decrement quantity" />
        </button>
        <span>{buttonText}</span>
        <button
          className={styles.buttonToggle}
          onClick={() => increase(itemId)}
        >
          <SvgComponent icon="increment_quantity" alt="Increment quantity" />
        </button>
      </div>
    );
  }

  return (
    <button className={buttonClassList.join(" ")} {...props}>
      {variant === "default" && (
        <SvgComponent icon="add_to_cart" alt="Add to cart icon" />
      )}
      <span>{buttonText}</span>
    </button>
  );
}

export default ButtonComponent;
