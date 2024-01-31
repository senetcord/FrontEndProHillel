import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    setState: (state, action) => (state = action.payload),
    addItem: (state, action) => [...state, action.payload],
    deleteItem: (state, action) => {
      return state.filter((item) => {
        return item.id !== action.payload;
      });
    },
  },
});

export const { setState, addItem, deleteItem } = todoSlice.actions;
export default todoSlice.reducer;
