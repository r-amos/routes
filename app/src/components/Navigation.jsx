import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <navigation>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/routes">Routes</Link>
        </li>
        <li>
          <Link to="/routes/new">Add Route</Link>
        </li>
      </ul>
    </navigation>
  );
};

export default Navigation;
