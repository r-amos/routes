import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RouteFormContainer from "./containers/RouteFormContainer";
import RouteList from "./containers/RouteList";

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/routes/new">Add</Link>
        </li>
        <li>
          <Link to="/routes">Routes</Link>
        </li>
      </ul>
      <Route path="/routes/new" component={RouteFormContainer} />
      <Route exact path="/routes" component={RouteList} />
    </div>
  </Router>
);

export default AppRouter;
