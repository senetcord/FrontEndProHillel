import { useDispatch, useSelector } from "react-redux";
import { deleteAllItemsThunk } from "../../utilities/Redux/thunks";
import store from "../../utilities/Redux/store";

const Footer = () => {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  function handleClear() {
    dispatch(deleteAllItemsThunk(store.getState));
  }
  return (
    <div className="footer">
      <h4>Total: {todoList.length}</h4>
      <button onClick={handleClear}>Clear All</button>
    </div>
  );
};
export default Footer;
