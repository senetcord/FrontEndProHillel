import React from "react";

class Input extends React.Component {
  render() {
    return (
      <>
        <label for="basic-url" className="form-label">
          <span className="text-lg text-warning">SWAPI The Star Wars API</span>
        </label>
        <form className="input-group mb-3">
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>
          <input
            type="text"
            className="form-control "
            id="basic-url"
            aria-describedby="basic-addon3"
            placeholder="people/1"
          />
          <button
            className="btn btn-outline-warning "
            type="submit"
            id="button-addon2"
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
