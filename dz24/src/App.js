import React from "react";
import Input from "./components/Input";
import Output from "./components/Output";

class App extends React.Component {
  render() {
    return (
      <div className="mt-5 w-50 mx-auto">
        <Input />
        <Output />
      </div>
    );
  }
}
export default App;
