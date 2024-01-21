import PropTypes from "prop-types";

const TodoItem = ({ handleDelete, text, id }) => {
  return (
    <div>
      <li>{text}</li>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodoItem;
