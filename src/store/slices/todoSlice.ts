import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoItem } from "../../types/types";

export interface ITodoSlice {
  todos: ITodoItem[];
  todoInputs: { title: string; description: string };
}

const initialState: ITodoSlice = {
  todos: [],
  todoInputs: { title: "", description: "" },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<ITodoItem>) {
      state.todos = [...state.todos, action.payload];
    },
    changeStatus(
      state,
      action: PayloadAction<{ id: string; status: boolean }>
    ) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, status: action.payload.status }
          : todo
      );
    },
    changeTitle(state, action: PayloadAction<string>) {
      state.todoInputs.title = action.payload;
    },
    changeDescription(state, action: PayloadAction<string>) {
      state.todoInputs.description = action.payload;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, changeTitle, changeDescription, changeStatus } =
  todoSlice.actions;
