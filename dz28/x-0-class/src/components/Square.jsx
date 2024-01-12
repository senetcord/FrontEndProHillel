import React from "react";
import PropTypes from "prop-types";

class Square extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, handleClick } = this.props;
    return <button onClick={handleClick}>{value}</button>;
  }
}

Square.propTypes = {
  value: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default Square;
