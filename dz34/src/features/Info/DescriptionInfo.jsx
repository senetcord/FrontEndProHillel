import { Box } from "@mui/material";

const DescriptionInfo = ({ children }) => {
  return (
    <Box
      sx={{
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      {children}
    </Box>
  );
};
export default DescriptionInfo;
