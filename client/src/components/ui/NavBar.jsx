import React from 'react';
import raccoon4 from '/raccoon4.ico';

export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div>
        <img
          // src={raccoon4}
          // alt="Logo"
          // width="30"
          // height="24"
          // className="d-inline-block align-text-top"
        />
        <a className="navbar-brand ms-2">Test</a>
        </div>
      </div>
    </nav>
  );
}
