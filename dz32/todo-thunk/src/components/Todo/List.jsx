import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { loadAllItemsThunk } from "../../utilities/Redux/thunks";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllItemsThunk());
  }, []);

  const todoList = useSelector((state) => state.todo);

  return (
    <ul className="list">
      {todoList.map((item) => {
        return <ListItem key={item.id} id={item.id} text={item.text} />;
      })}
    </ul>
  );
};
export default List;
