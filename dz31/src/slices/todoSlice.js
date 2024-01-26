import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    add: (state, action) => {
      return (state = [...state, action.payload]);
    },
  },
});

export const { add } = todoSlice.actions;
export default todoSlice.reducer;
