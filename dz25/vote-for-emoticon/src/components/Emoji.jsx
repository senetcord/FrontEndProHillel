import React from "react";
import PropTypes from "prop-types";

class Emoji extends React.Component {
  render() {
    const { symbol, count, onClick, show } = this.props;
    return (
      <div>
        <span onClick={onClick} className="emoticon__img">
          {symbol}
        </span>

        {show ? <h4>Amount of votes: {count}</h4> : <div>{count}</div>}
      </div>
    );
  }
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
};

export default Emoji;
