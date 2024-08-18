import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout({hookedUser}) {
console.log(hookedUser)

  return (
    <div>
      <div className="row">
        <NavBar hookedUser={hookedUser}/>
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
