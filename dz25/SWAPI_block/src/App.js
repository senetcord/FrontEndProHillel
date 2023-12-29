import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
    };
  }

  submitBlock = () => {
    this.setState((prevState) => ({
      disabled: true,
    }));
  };

  render() {
    return (
      <div className="mt-5 w-50 mx-auto">
        <Input disabled={this.state.disabled} submitBlock={this.submitBlock} />
        <Output disabled={this.state.disabled} />
      </div>
    );
  }
}
export default App;
