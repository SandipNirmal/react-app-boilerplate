import React from 'react';

import AuthButton from './authButton';

const AppHeader = props => {
  return (
    <header>
      <div className="center-block">
        <div className="container">
          <div className="col-sm-6 col-md-8">
            <a href="/">
              <h3> App Logo </h3>
            </a>
          </div>
          {/* <div>
            Navbar
            </div> */}
          <div className="col-sm-6 col-md-4">
            <AuthButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
