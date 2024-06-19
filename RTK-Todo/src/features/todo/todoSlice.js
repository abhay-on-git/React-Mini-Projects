import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello world" }],
  currentEditableTodoId: null,
  currentEditableTodoText: "",
  isEditable: false,
};

export const TodoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, text } = action.payload;
      state.currentEditableTodoId = id;
      state.currentEditableTodoText = text;
      state.isEditable = true; // Set to true since we're editing
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.currentEditableTodoId = null;
      state.currentEditableTodoText = "";
      state.isEditable = false; // Set to false after update
    },
  },
});

export const { addTodo, removeTodo, updateTodo, editTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
