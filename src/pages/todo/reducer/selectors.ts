import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const todo = (state: RootState) => state.todo;

export const todoItemsSelector = createSelector(todo, (todoState) => todoState.todoItems);

export const sortedTodoItemsSelector = createSelector(todo, (todoState) =>
  [...todoState.todoItems].sort((a, b) => a.text.localeCompare(b.text))
);
