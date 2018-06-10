import React, { Component } from "react";
import "./RouteForm.scss";

class RouteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeTitle: "",
      routeDescription: "",
      routeGpxFile: null
    };
  }
  // Maintain Form State In Component State
  updateFormState = event => {
    const { id, value, files } = event.target;
    this.setState({
      [id]: files ? files[0] : value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // Build Out Form Data Object From State (Will Auto Set content-type multipart/form-data)
    let formData = new FormData();
    for (let property in this.state) {
      formData.append(property, this.state[property]);
    }
    // Call Container Method To Handle API
    this.props.handleSubmit(formData);
  };

  render() {
    return (
      <form class="form" enctype="multipart/form-data">
        <div class="form__spacer">
          <label class="form__label" for="routeTitle">
            Title
          </label>
          <input
            class="form__input"
            type="text"
            id="routeTitle"
            maxLength="50"
            onChange={this.updateFormState}
            value={this.state.routeTitle}
          />
        </div>
        <div class="form__spacer">
          <label class="form__label" for="routeFile">
            Route
          </label>
          <input
            class="form__input"
            type="file"
            id="routeGpxFile"
            onChange={this.updateFormState}
          />
        </div>
        <div class="form__spacer">
          <label class="form__label" for="routeDescription">
            Description
          </label>
          <textarea
            class="form__textarea"
            id="routeDescription"
            name="routeDescription"
            onChange={this.updateFormState}
            value={this.state.routeDescription}
          >
            Enter Route Description Here
          </textarea>
        </div>
        <button class="form__submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </form>
    );
  }
}

export default RouteForm;
