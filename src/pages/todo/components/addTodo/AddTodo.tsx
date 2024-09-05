import { useState, ChangeEvent } from "react";
import TodoForm from "./TodoForm";
import { useAppDispatch } from "hooks/reduxHooks";
import { addTodo } from "pages/todo/reducer/todoReducer";

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [todo, setTodo] = useState<string>("");

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const addTodoHandler = () => {
    const trimmedInput = todo.trim();
    if (!trimmedInput) {
      return;
    }
    dispatch(addTodo(trimmedInput));
    setTodo("");
  };

  const todoFormProps = {
    addTodoHandler,
    value: todo,
    inputHandler,
  };

  return <TodoForm {...todoFormProps} />;
};

export default AddTodo;
