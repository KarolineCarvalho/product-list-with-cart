import styles from "./ButtonStyle.module.css";
import SvgComponent from "../SvgComponent";

export interface ButtonProps {
  buttonText: string;
  type: "default" | "confirm";
  isChangeQnty?: boolean;
}

function ButtonComponent({ buttonText, isChangeQnty, type }: ButtonProps) {
  const buttonClassList = [styles.button];
  buttonClassList.push(styles[`button--${type}`]);

  if (type === "default" && isChangeQnty)
    buttonClassList.push(styles[`button--${"changeQnty"}`]);

  if (isChangeQnty && type === "default") {
    return (
      <div className={buttonClassList.join(" ")}>
        <button className={styles.buttonToggle}>
          <SvgComponent icon="decrement_quantity" alt="Decrement quantity" />
        </button>
        <span>{buttonText}</span>
        <button className={styles.buttonToggle}>
          <SvgComponent icon="increment_quantity" alt="Increment quantity" />
        </button>
      </div>
    );
  }

  return (
    <button className={buttonClassList.join(" ")}>
      {type === "default" && (
        <SvgComponent icon="add_to_cart" alt="Add to cart icon" />
      )}
      <span>{buttonText}</span>
    </button>
  );
}

export default ButtonComponent;
