import PropTypes from "prop-types";
import clsx from "clsx";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeMode } from "../App";

const LinkTo = ({ to, name }) => {
  const [color] = useContext(ThemeMode);

  const className = clsx(
    "text-lg font-medium hover:text-blue-500 transition-colors duration-300",
    {
      ["text-gray-700"]: color === "light",
      ["text-white"]: color === "dark",
    }
  );

  return (
    <Link to={to} className={className}>
      {name}
    </Link>
  );
};

LinkTo.propTypes = {
  to: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
export default LinkTo;
