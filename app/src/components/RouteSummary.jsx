import React from "react";

const RouteSummary = props => {
  return <h1 onClick={() => props.onRouteSelect(props._id)}>{props.title}</h1>;
};

export default RouteSummary;
