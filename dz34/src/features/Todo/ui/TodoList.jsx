import { List } from "@mui/material";

const TodoList = ({ children }) => {
  return (
    <List
      sx={{ overflowY: "scroll", height: "300px", backgroundColor: "white" }}
    >
      {children}
    </List>
  );
};
export default TodoList;
