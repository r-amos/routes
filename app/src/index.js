import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./AppRouter";

const App = () => {
  return <AppRouter />;
};

ReactDOM.render(<App />, document.getElementById("app"));
