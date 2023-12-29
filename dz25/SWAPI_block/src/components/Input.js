import React from "react";

class Input extends React.Component {
  render() {
    const { disabled, submitBlock } = this.props;
    return (
      <>
        <label htmlFor="basic-url" className="form-label">
          <span className="text-lg text-warning">SWAPI The Star Wars API</span>
        </label>
        <form
          action="#"
          onSubmit={submitBlock}
          className={`input-group mb-3 ${disabled ? "blocked" : ""}`}
        >
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>
          <input
            type="text"
            className="form-control "
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="people/1"
            disabled={disabled}
          />
          <button
            className="btn btn-outline-warning "
            type="submit"
            id="button-addon2"
            disabled={disabled}
            onClick={submitBlock}
          >
            Button
          </button>
        </form>
        <p className="hint">
          Need a hint? try <span>people/1/</span> or <span>planets/3/</span> or
          <span>starships/9/</span>
        </p>
      </>
    );
  }
}

export default Input;
