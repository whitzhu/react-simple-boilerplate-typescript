import React from "react";
import WorksPage from "../WorksPage/WorksPage.tsx";
import AboutPage from "../AboutPage/AboutPage.tsx";
import Navbar from "../Navbar/Navbar.tsx";
import Homepage from "../Homepage/Homepage.tsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

const AppRouter = () => (
  <Router>
    <Navbar />
    <Route path="/" exact component={Homepage} />
    <Route path="/works/" component={WorksPage} />
    <Route path="/about/" component={AboutPage} />
  </Router>
);

export default AppRouter;
