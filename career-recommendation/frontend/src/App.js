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
          Sabemos que no es fácil elegir el pregrado ideal, es por eso que es por esto que hemos desarrollado esta App. ¡Escribe los resultados de tus ICFES y descubramos juntos la carrera de tus sueños!
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
