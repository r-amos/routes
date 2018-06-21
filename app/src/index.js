import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route as ReactRoute,
  Link
} from "react-router-dom";
import RouteFormContainer from "./containers/RouteFormContainer";
import RouteList from "./containers/RouteList";
import Route from "./components/Route";

const App = () => {
  return (
    <Router>
      <div>
        <ReactRoute exact path="/" component={RouteList} />
        <ReactRoute exact path="/routes" component={RouteList} />
        <ReactRoute path="/route/:id" component={Route} />
        <ReactRoute exact path="/routes/new" component={RouteFormContainer} />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
