import React from 'react';
import NavBar from './ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <div className="row">
        <NavBar />
      </div>
      <div className="row">
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
