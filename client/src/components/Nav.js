import React from "react";
import { NavLink } from "react-router-dom";

const routes = [
  {
    name: "About",
    route: "/about"
  }
];

function Nav() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <NavLink className="navbar-item" to="/">
          Home
        </NavLink>
      </div>
      <div className="navbar-end">
        {routes.map(item => (
          <NavLink className="navbar-item" key={item.route} to={item.route}>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
export default Nav;
