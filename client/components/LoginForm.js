import React, { Component } from "react";

import AuthForm from "./AuthForm";

class LoginForm extends Component {
  render() {
    return (
      <div>
        <h4>Log In</h4>
        <AuthForm />
      </div>
    );
  }
}

export default LoginForm;
