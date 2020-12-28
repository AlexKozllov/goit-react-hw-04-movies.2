import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <ul>
      {mainRoutes.map((route) => (
        <li key={route.path}>
          <NavLink
            to={route.path}
            exact={route.exact}
            className=""
            activeClassName=""
          >
            {route.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavigationLinks;
