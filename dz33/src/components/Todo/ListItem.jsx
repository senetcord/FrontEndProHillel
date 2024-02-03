import { useDispatch } from "react-redux";
import { deleteItemAsyncAction } from "../../engine/Saga/asyncActions";

const ListItem = ({ id, text }) => {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItemAsyncAction(id));
  }

  return (
    <li className="listItem">
      <span>{text}</span>
      <button onClick={handleDelete}>X</button>
    </li>
  );
};
export default ListItem;
