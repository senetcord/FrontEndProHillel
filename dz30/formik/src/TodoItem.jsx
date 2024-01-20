import PropTypes from "prop-types";

const TodoItem = ({ handleDelete, text }) => {
  return (
    <div>
      <li>{text}</li>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
