import { Box } from "@mui/material";
import HeaderWidget from "../../widgets/Header/HeaderWidget";
import InfoWidget from "../../widgets/Info/InfoWidget";

const InfoPage = () => {
  return (
    <Box>
      <HeaderWidget titleText={"INFO"} />
      <InfoWidget />
    </Box>
  );
};
export default InfoPage;
