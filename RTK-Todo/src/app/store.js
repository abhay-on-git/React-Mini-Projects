import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from '../features/todo/todoSlice'

export const store = configureStore({
   reducer : TodoReducer
});