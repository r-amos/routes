import React, { Component } from "react";
import Loading from "../components/Loading";
import RouteSummary from "../components/RouteSummary";
import { Redirect } from "react-router";

class RouteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      error: null,
      routeList: null,
      route: null
    };
  }

  async componentDidMount() {
    try {
      const routes = await (await fetch(
        "http://localhost:3000/api/routes"
      )).json();
      this.setState({
        loading: false,
        routeList: routes
      });
    } catch (error) {
      //TODO
    }
  }

  async getRoute(id) {
    try {
      const route = await (await fetch(
        `http://localhost:3000/api/routes/${id}`
      )).json();
      this.setState({
        loading: false,
        route: route
      });
    } catch (error) {
      //TODO
    }
  }
  onRouteSelect = id => {
    this.setState({
      loading: true
    });
    this.getRoute(id);
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <Error />;
    }
    if (this.state.route) {
      return (
        <Redirect
          to={{
            pathname: `/routes/${this.state.route._id}`,
            state: { route: this.state.route }
          }}
        />
      );
    }
    if (this.state.routeList) {
      return this.state.routeList.map((route, index) => {
        return (
          <RouteSummary
            key={index}
            {...route}
            onRouteSelect={this.onRouteSelect}
          />
        );
      });
    }
  }
}

export default RouteList;
