import { Container } from "@mui/material";

const InfoEntity = ({ children }) => {
  return (
    <Container
      maxWidth={"xl"}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Container>
  );
};
export default InfoEntity;
