import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";

const NavigationLinks = () => {
  return (
    <>
      {mainRoutes.map((route) => (
        <NavLink
          key={route.path}
          to={route.path}
          exact={route.exact}
          className=""
          activeClassName=""
        >
          {route.name}
        </NavLink>
      ))}
    </>
  );
};

export default NavigationLinks;
