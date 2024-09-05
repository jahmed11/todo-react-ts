import { FC } from "react";
import Button from "sharedComponents/button/Button";
import styles from "./displayTodo.module.css";


interface TodoProps {
  text: String;
  id: number;
  onTodoDeleteClick: (id: number) => void;
  index: number;
}

const Todo: FC<TodoProps> = ({ text, onTodoDeleteClick, id, index }) => {
  return (
    <div className={styles["todo-item"]}>
      <span className={styles['todo-item__number']} >{index + 1}.</span>
      <span className={styles["todo-item__text"]}>{text}</span>
      <span className={styles["todo-item__action"]}>
        <Button variant="danger" onClick={() => onTodoDeleteClick(id)}>
          Delete
        </Button>
      </span>
    </div>
  );
};

export default Todo;
