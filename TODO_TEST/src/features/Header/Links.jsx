import { List } from "@mui/material";

const Links = ({ children }) => {
  return <List sx={{ display: "flex", gap: "25px" }}>{children}</List>;
};
export default Links;
