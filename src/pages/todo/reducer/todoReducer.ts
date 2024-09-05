import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TodoProps } from 'types/todo';


interface TodoState {
    todoItems: TodoProps[];
}

export const initialState: TodoState = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: TodoProps = {
        id: Date.now(),
        text: action.payload,
      };
      state.todoItems.push(newTodo);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todoItems = state.todoItems.filter(todo => todo.id !== action.payload);
    },
  },
});


export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
