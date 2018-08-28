// @flow

import React, { PureComponent } from "react";
import { FormattedMessage } from "react-intl";
import axios from "axios";
import "./Form.css";

class Form extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      "app-form-name": "",
      "app-form-email": "",
      "app-form-message": ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let fields = [
      "<b>Name</b>: " + this.state["app-form-name"],
      "<b>Email</b>: " + this.state["app-form-email"],
      this.state["app-form-message"]
    ];
    let msg = "";
    fields.forEach(field => {
      msg += field + "\n";
    });
    msg = encodeURI(msg);
    axios
      .post(
        `https://api.telegram.org/bot630282563:AAEfK5_OzvBZPNT7HZy8-gCH1vZ1s9OrP9s/sendMessage?chat_id=-305897377&parse_mode=html&text=${msg}`
      )
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="app-form-item">
          <label id="app-form-name" className="app-form-label">
            <FormattedMessage id="app-form-label-name" />:
          </label>
          <input
            className="app-form-input"
            type="text"
            name="app-form-name"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </div>
        <div className="app-form-item">
          <label id="app-form-email" className="app-form-label">
            <FormattedMessage id="app-form-label-email" />:
          </label>
          <input
            className="app-form-input"
            type="text"
            name="app-form-email"
            value={this.state.email}
            onChange={this.handleInput}
          />
        </div>
        <div className="app-form-item">
          <label id="app-form-message" className="app-form-label">
            <FormattedMessage id="app-form-label-message" />:
          </label>
          <textarea
            className="app-form-textarea"
            name="app-form-message"
            value={this.state.message}
            onChange={this.handleInput}
          />
        </div>
        <div className="app-form-item app-form-item--button">
          <button className="app-form-button">
            <FormattedMessage id="app-form-button-send" />
          </button>
          <p className="app-form-status"></p>
        </div>
      </form>
    );
  }
}

export default Form;
