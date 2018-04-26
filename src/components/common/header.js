import React from "react";

import AuthButton from "./authButton";

const AppHeader = props => {
  return (
    <header>
      <div className="container">
        <div>
          <a href="/">
            <h3> App Logo </h3>
          </a>
        </div>
        <div>
          <AuthButton />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
