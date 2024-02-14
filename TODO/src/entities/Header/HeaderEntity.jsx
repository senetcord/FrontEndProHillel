import { Container } from "@mui/material";

const HeaderEntity = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#1976d2",
        color: "white",
        padding: "20px",
        boxShadow: "1px 3px 5px black",
      }}
      maxWidth={"xl"}
    >
      {children}
    </Container>
  );
};
export default HeaderEntity;
