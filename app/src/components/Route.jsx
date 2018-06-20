import React from "react";

const Route = props => {
  return <h1>{props.location.state.route.routeTitle}</h1>;
};

export default Route;
