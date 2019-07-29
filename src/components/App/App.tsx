import React, { Component } from "react";
import Navbar from "../Navbar/Navbar.tsx";
import Homepage from "../Homepage/Homepage.tsx";

import "../../styles/global-styles.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Homepage />
      </div>
    );
  }
}
