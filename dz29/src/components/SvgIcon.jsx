import { useContext } from "react";
import { ThemeMode } from "../App";
import PropTypes from "prop-types";

const SvgIcon = ({ path, name, link }) => {
  const [theme] = useContext(ThemeMode);
  const color = theme === "light" ? "" : "fill-white";
  return (
    <a href={link} rel="noreferrer" target="_blank">
      <svg
        className={`w-48 ${color}`}
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{name}</title>
        <path d={path} />
      </svg>
    </a>
  );
};

SvgIcon.propTypes = {
  path: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SvgIcon;
