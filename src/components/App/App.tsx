import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.tsx";
import AppRouter from "../AppRouter/AppRouter.tsx";

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
