import React from "react";
import ReactDOM from "react-dom";
import RouteFormContainer from "./containers/RouteFormContainer";

const App = () => {
  return <RouteFormContainer />;
};

ReactDOM.render(<App />, document.getElementById("app"));
