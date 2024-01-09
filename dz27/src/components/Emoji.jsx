import PropTypes from "prop-types";

function Emoji({ symbol, count, onClick, show }) {
  return (
    <div>
      <span onClick={onClick} className="emoticon__img">
        {symbol}
      </span>

      {show ? <h4>Amount of votes: {count}</h4> : <div>{count}</div>}
    </div>
  );
}

Emoji.propTypes = {
  symbol: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  show: PropTypes.bool,
};

export default Emoji;
