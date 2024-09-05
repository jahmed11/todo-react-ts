import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";


const todo = (state: RootState) => state.todo;

export const todoItemsSelector  = createSelector(todo, (todoState) => todoState.todoItems);
