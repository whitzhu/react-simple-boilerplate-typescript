import React, { Component } from "react";
import AppRouter from "../AppRouter/AppRouter";

import "../../styles/global-styles.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <AppRouter />
      </div>
    );
  }
}
