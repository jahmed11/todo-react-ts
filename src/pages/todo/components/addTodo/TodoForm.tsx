import { FC, FormEvent, ChangeEvent } from "react";
import Input from "sharedComponents/input/Input";
import Button from "sharedComponents/button/Button";
import styles from "./addTodo.module.css";

interface TodoFormProps {
  addTodoHandler: () => void;
  value: string;
  inputHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodoHandler, value, inputHandler }) => {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTodoHandler();
  };

  return (
    <form onSubmit={onSubmit}>
      <div className={styles["todo-form-container"]}>
        <Input placeholder="add todo" value={value} onChange={inputHandler} />
        <Button type="submit" variant="primary">
          Add Todo
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
