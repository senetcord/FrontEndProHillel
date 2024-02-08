import {
  Checkbox,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const TodoListItem = ({ text }) => {
  return (
    <ListItem>
      <ListItemButton component="label" dense>
        <ListItemIcon>
          <Checkbox edge="start" disableRipple />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};
export default TodoListItem;
