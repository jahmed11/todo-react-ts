import { FC } from "react";
import AddTodo from "./components/addTodo";
import DisplayTodo from "./components/displayTodo";
import styles from './todo.module.css'

const Todo: FC = () => {
  return (
    <div className={styles['todo-container']}>
      <AddTodo />
      <DisplayTodo />
    </div>
  );
};

export default Todo;
