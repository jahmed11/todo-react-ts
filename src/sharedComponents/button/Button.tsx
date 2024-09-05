import { FC } from "react";
import styles from "./button.module.css";

interface ButtonProps {
  variant: "primary" | "danger";
  onClick?: () => void;
  children: React.ReactNode | string | number;
  type?: "submit" | "button" | undefined;
}

const Button: FC<ButtonProps> = ({ children, onClick, variant, type }) => {
  const buttonClass = `${styles.button} ${styles[`button--${variant}`]}`;
  return (
    <button type={type} className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
