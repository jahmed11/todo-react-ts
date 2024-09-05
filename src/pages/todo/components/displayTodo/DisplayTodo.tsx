import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { deleteTodo } from "pages/todo/reducer/todoReducer";
import { todoItemsSelector } from "pages/todo/reducer/selectors";
import Todo from "./Todo";
import styles from "./displayTodo.module.css";
import { TodoProps } from "types/todo";

const DisplayTodo = () => {
  const dispatch = useAppDispatch();
  const todoItems = useAppSelector(todoItemsSelector);

  const onTodoDeleteClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const rendeTodoList = (items: TodoProps[]) => {
    if (!items.length) {
      return <div className={styles["todos-list--empty"]}>Please Add your todos</div>;
    }

    return todoItems.map((todoItem: TodoProps, index: number) => {
      return (
        <Todo
          index={index}
          text={todoItem.text}
          id={todoItem.id}
          onTodoDeleteClick={onTodoDeleteClick}
        />
      );
    });
  };

  return (
    <div className={styles["todos-container"]}>
      <h2>Todo List</h2>
      <div className={styles["todos-list"]}>{rendeTodoList(todoItems)}</div>
    </div>
  );
};

export default DisplayTodo;
