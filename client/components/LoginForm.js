import React, { Component } from "react";
import { graphql } from "react-apollo";

import AuthForm from "./AuthForm";
import mutation from "../mutations/login";

class LoginForm extends Component {
  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password }
    });
  }
  render() {
    return (
      <div>
        <h4>Log In</h4>
        <AuthForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
