import { useAppSelector, useAppDispatch } from "hooks/reduxHooks";
import { useState, useEffect } from "react";
import { deleteTodo } from "pages/todo/reducer/todoReducer";
import { todoItemsSelector } from "pages/todo/reducer/selectors";
import Todo from "./Todo";
import styles from "./displayTodo.module.css";
import { TodoProps } from "types/todo";

const DisplayTodo = () => {
  const dispatch = useAppDispatch();
  const todoItems = useAppSelector(todoItemsSelector);
  const [sortedTodos, setSortedTodos] = useState<TodoProps[]>([]);

  const onTodoDeleteClick = (id: number) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    const copy = JSON.parse(JSON.stringify(todoItems)) as TodoProps[];
    const sortedItems = copy.sort((a, b) => {
      return a.text.localeCompare(b.text);
    }) as TodoProps[];
    setSortedTodos(sortedItems);
  }, [todoItems]);

  const renderTodoList = (items: TodoProps[]) => {
    if (!items.length) {
      return <div className={styles["todos-list--empty"]}>Please Add your todos</div>;
    }

    return items.map((todoItem: TodoProps, index: number) => {
      return (
        <Todo
          key={todoItem.id}
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
      <div className={styles["todos-list"]}>{renderTodoList(sortedTodos)}</div>
    </div>
  );
};

export default DisplayTodo;
