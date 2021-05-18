import React from "react";
import Results from "./pages/results/results";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import logo from './img/career.png';

const App = () => {
  return (
    <div>
      <div className="main">
        <img src={logo} alt="" />
        <p>
          Intro: dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
          nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          Ut wisi ad minim veniam, quis nostrud exerci ullamcorper suscipit
          lobortis nisl ut aliquip ex ea consequat.
        </p>

        <div className="upload">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Results} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
