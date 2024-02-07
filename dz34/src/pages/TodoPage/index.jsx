import { Box } from "@mui/material";
import HeaderWidget from "../../widgets/Header/HeaderWidget";
import TodoWidget from "../../widgets/Todo/TodoWidget";

const TodoPage = () => {
  return (
    <Box>
      <HeaderWidget titleText={"TODO"} />
      <TodoWidget />
    </Box>
  );
};
export default TodoPage;
