import { useDispatch } from "react-redux";
import { deleteItemThunk } from "../../utilities/Redux/thunks";

const ListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItemThunk(id));
  }

  return (
    <li className="listItem">
      <span>{text}</span>
      <button onClick={handleDelete}>X</button>
    </li>
  );
};
export default ListItem;
