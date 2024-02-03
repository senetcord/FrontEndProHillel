import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    setState: (state, actions) => actions.payload,
    add: (state, actions) => [...state, actions.payload],
    deleteItem: (state, actions) =>
      state.filter((item) => item.id !== actions.payload),
  },
});

export const { setState, add, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
