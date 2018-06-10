import React from "react";
import ReactDOM from "react-dom";
import RouteList from "./containers/RouteList";

const App = () => {
  return <RouteList />;
};

ReactDOM.render(<App />, document.getElementById("app"));
