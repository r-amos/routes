import React, { Component } from "react";
import RouteForm from "./RouteForm";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { withRouter } from "react-router-dom";

class RouteFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      route: null
    };
  }

  handleSubmit = async formData => {
    this.setState({
      loading: true
    });
    try {
      const response = await fetch("http://localhost:3000/api/routes", {
        body: formData,
        method: "POST"
      });
      const data = await response.json();
      this.setState({
        route: data
      });
      this.props.history.push("/routes");
    } catch (error) {
      this.setState({
        error: true
      });
    }
  };

  renderError() {
    return <Error />;
  }

  renderLoading() {
    return <Loading />;
  }

  renderRouteForm() {
    return <RouteForm handleSubmit={this.handleSubmit} />;
  }

  render() {
    const { loading, error, route } = this.state;
    if (route) {
      return this.renderRouteForm();
    }
    if (error) {
      return this.renderError();
    }
    if (loading) {
      return this.renderLoading();
    }
    return this.renderRouteForm();
  }
}

export default withRouter(RouteFormContainer);
