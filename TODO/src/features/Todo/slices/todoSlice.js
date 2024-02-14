import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  todoList: [],
  loaders: {
    addItemLoading: false,
    checkItemLoading: false,
    deleteItemLoading: false,
    getDataLoading: false,
    setItemsLoading: false,
  },
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setState: (state, actions) => actions.payload,

    addItem: (state, actions) => {
      return {
        ...state,
        todoList: [...state.todoList, actions.payload],
      };
    },

    checkItem: (state, actions) => {
      return {
        ...state,
        todoList: state.todoList.map((item) => {
          if (item.id === actions.payload) {
            return {
              ...item,
              checked: !item.checked,
            };
          }
          return item;
        }),
      };
    },

    deleteItem: (state, actions) => {
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== actions.payload),
      };
    },

    setLoader: (state, actions) => {
      const { loaderName, isLoading } = actions.payload;
      return {
        ...state,
        loaders: {
          ...state.loaders,
          [loaderName]: isLoading,
        },
      };
    },
  },
});

export const { setState, addItem, checkItem, deleteItem, setLoader } =
  todoSlice.actions;
export default todoSlice.reducer;
