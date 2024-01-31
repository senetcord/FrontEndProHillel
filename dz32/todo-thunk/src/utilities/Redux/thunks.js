import { addItem } from "../../utilities/Redux/slices/todoSlice";
import { deleteItem } from "../../utilities/Redux/slices/todoSlice";
import { setState } from "../../utilities/Redux/slices/todoSlice";

const addItemThunk = (event, input, uuidv4) => {
  return (dispatch, getState) => {
    event.preventDefault();
    let value = input.current.value;
    if (value.trim() === "") {
      alert("Enter a value!");
      input.current.value = "";
      return;
    }
    const id = uuidv4();
    dispatch(addItem({ text: value, id: id }));
    input.current.value = "";

    const items = getState().todo;
    localStorage.setItem("todoItems", JSON.stringify(items));
  };
};

const deleteItemThunk = (id) => {
  return (dispatch, getState) => {
    dispatch(deleteItem(id));
    const items = getState().todo;
    localStorage.setItem("todoItems", JSON.stringify(items));
  };
};

const deleteAllItemsThunk = () => {
  return (dispatch, getState) => {
    dispatch(setState([]));
    const items = getState().todo;
    localStorage.setItem("todoItems", JSON.stringify(items));
  };
};

const loadAllItemsThunk = () => {
  return (dispatch) => {
    const storedItems = localStorage.getItem("todoItems");
    if (storedItems) {
      const items = JSON.parse(storedItems);
      dispatch(setState(items));
    }
  };
};

export {
  addItemThunk,
  deleteItemThunk,
  deleteAllItemsThunk,
  loadAllItemsThunk,
};
