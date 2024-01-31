import { useDispatch } from "react-redux";
import { deleteItemThunk } from "../../utilities/Redux/thunks";
import store from "../../utilities/Redux/store";

const ListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItemThunk(id, store.getState));
  }

  return (
    <li className="listItem">
      <span>{text}</span>
      <button onClick={handleDelete}>X</button>
    </li>
  );
};
export default ListItem;
