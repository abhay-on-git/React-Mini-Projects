import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const isEditable = useSelector((state) => state.isEditable);
  const currentTodoId = useSelector((state) => state.currentEditableTodoId);
  const currentTodoText = useSelector((state) => state.currentEditableTodoText);
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  console.log(isEditable);

  useEffect(() => {
    if (isEditable) {
      setInput(currentTodoText);
    } else {
      setInput("");
    }
  }, [currentTodoText, isEditable]);

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const updateTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(
        updateTodo({
          id: currentTodoId,
          text: input,
          isEditable: isEditable,
        })
      );
      setInput("");
    }
  };

  return (
    <form
      onSubmit={isEditable ? updateTodoHandler : addTodoHandler}
      className="space-x-3 mt-12"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {isEditable ? "Update" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
