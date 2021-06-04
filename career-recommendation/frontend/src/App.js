import React from "react";
import Results from "./pages/results/results";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import Home from "./pages/home/home";
import logo from './img/career.png';
import NotFound from './pages/notFound/notFound';


const App = () => {
  return (
    <div>
      <div className="main">
      <Link to="/">
        <img src={logo} alt="" id="logo" />
        </Link>
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
            <Route exact path="/404" component={NotFound} />
            <Route path="/*" component={() => <Redirect to="/404"/>} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;
