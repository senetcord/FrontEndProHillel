import { ListItem } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Link = ({ text, to }) => {
  return (
    <ListItem
      to={to}
      component={RouterLink}
      sx={{ all: "unset", cursor: "pointer", fontSize: "1rem" }}
    >
      {text}
    </ListItem>
  );
};
export default Link;
