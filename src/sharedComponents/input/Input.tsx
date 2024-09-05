import { FC, ChangeEvent } from "react";
import styles from "./input.module.css";

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: () => void;
}
const Input: FC<InputProps> = ({ value, onChange, onKeyDown, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className={styles["input-field"]}
      placeholder={placeholder}
    />
  );
};

export default Input;
