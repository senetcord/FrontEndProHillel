import PropTypes from "prop-types";

function Square({ value, handleClick }) {
  return <button onClick={handleClick}>{value}</button>;
}

Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};
export default Square;
