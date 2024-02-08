import { Box } from "@mui/material";

const InfoImg = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10%",
        flexWrap: "wrap-reverse",
      }}
    >
      <img style={{ maxWidth: "900px" }} src="/todo-pic.jpg" />
      <Box sx={{ textAlign: "center", lineHeight: "2", fontSize: "4rem" }}>
        TODO <br /> INFO
      </Box>
    </Box>
  );
};
export default InfoImg;
