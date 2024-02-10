import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import {
  checkItemAsyncAction,
  deleteItemAsyncAction,
} from "../../../shared/Saga/asyncActions";

const TodoListItem = ({ text, checked, id }) => {
  const dispatch = useDispatch();
  function handleCheck() {
    dispatch(checkItemAsyncAction(id));
  }

  function handleDelete() {
    dispatch(deleteItemAsyncAction(id));
  }

  return (
    <ListItem>
      <ListItemButton onClick={handleCheck} component="button" dense>
        <ListItemIcon>
          <Checkbox checked={checked} edge="start" disableRipple />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
      <IconButton onClick={handleDelete} aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </ListItem>
  );
};
export default TodoListItem;
