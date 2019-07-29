import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Boiler Plate 2019</h1>
        <p>Typescript</p>
        <p>Webpack-dev-server</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
