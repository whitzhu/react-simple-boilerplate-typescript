import React from "react";
import WorksPage from "components/WorksPage/WorksPage";
import AboutPage from "components/AboutPage/AboutPage";
import Navbar from "components/Navbar/Navbar";
import Homepage from "components/Homepage/Homepage";
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
