import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Contact from "./components/pages/ContactPage/Contact";
import Resume from "./components/pages/ResumePage/Resume";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} I />
        <Route path="/contact" exact component={Contact} />
        <Route path="/resume" exact component={Resume} />
      </Switch>
    </Router>
  );
}

export default App;
