import { RootState } from "./store";

export const todoList = (state: RootState) => state.todoSlice.todos;
export const todoInputs = (state: RootState) => state.todoSlice.todoInputs;
