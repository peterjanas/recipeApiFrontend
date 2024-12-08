import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function MainLayout({}) {
  return (
    <div>
      <div className="top-bar">
        <h1 className="title">Recipe API</h1>
      </div>
      <div className="image-banner">
        <img src="header.png"/>
      </div>
      <div className="route-bar">
      <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apivision">Api vision</NavLink>
          </li>
          <li>
            <NavLink to="/endpoints">Endpoints table</NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;
