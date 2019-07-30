import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import AppRouter from "../AppRouter/AppRouter";

import "../../styles/global-styles.css";

class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}

export default hot(App);
