import React from 'react';
import raccoon4 from '/raccoon4.ico';

export default function NavBar({hookedUser}) {

  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container-fluid">
        <div className='row-1'>
        <img
          src={raccoon4}
          alt="Logo"
          width="30"
          height="24"
          className="d-inline-block align-text-top"
        />
        <a className="navbar-brand ms-2">Test</a>
        </div>
        <div className='row-2'>
          <span className='navbar-brand py-auto lh-0 '>{hookedUser.login}</span>
        </div>
      </div>
    </nav>
  );
}
