import { Container } from "@mui/material";

const TodoEntity = ({ children }) => {
  return (
    <Container
      sx={{ padding: "50px", backgroundColor: "#0dcaf0" }}
      maxWidth={"lg"}
    >
      {children}
    </Container>
  );
};
export default TodoEntity;
