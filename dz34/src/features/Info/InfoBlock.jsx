import { Box } from "@mui/material";

const InfoBlock = ({ children }) => {
  return (
    <Box
      sx={{
        textIndent: "2rem",
        lineHeight: "1.5",
        fontSize: "1.25rem",
      }}
    >
      {children}
    </Box>
  );
};
export default InfoBlock;
