import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    setState: (state, actions) => actions.payload,
    addItem: (state, actions) => [...state, actions.payload],
    checkItem: (state, actions) =>
      state.map((item) => {
        if (item.id === actions.payload) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      }),
    deleteItem: (state, actions) =>
      state.filter((item) => item.id !== actions.payload),
  },
});

export const { setState, addItem, checkItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
