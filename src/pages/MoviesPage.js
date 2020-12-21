import React, { Suspense } from "react";
import { moviesRoutes } from "../routes/moviesRoutes";
import { NavLink, Route, Switch } from "react-router-dom";
import Loader from "../Components/loader/Loader";

const MoviesPage = (props) => {
  console.log(props.match.url);
  return (
    <>
      <h2>Profile</h2>
      <ul>
        <Suspense fallback={<Loader />}>
          {moviesRoutes.map((route) => (
            <li key={route.path}>
              <NavLink
                to={`${props.match.url}${route.path}`}
                exact={route.exact}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </Suspense>
      </ul>

      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            {moviesRoutes.map((route) => (
              <Route
                key={route.path}
                path={`${props.match.url}${route.path}`}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </>
  );
};

export default MoviesPage;
