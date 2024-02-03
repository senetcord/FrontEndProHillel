import { useDispatch, useSelector } from "react-redux";
import ListItem from "./ListItem";
import { useEffect } from "react";
import { getDataAsyncAction } from "../../engine/Saga/asyncActions";

const List = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataAsyncAction());
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
