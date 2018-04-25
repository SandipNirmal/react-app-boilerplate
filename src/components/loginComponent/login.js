import React, { Component } from "react";

import LoginForm from "./../common/loginForm";

class Login extends Component {
  render() {
    return (
      <section className="login">
        <div className="container">
          <div className="row">
            <div>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
