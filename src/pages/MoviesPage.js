import React, { Suspense } from "react";
import { moviesRoutes } from "../routes/moviesRoutes";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import Loader from "../Components/loader/Loader";
import CardMovies from "../Components/cardMovies/CardMovies";

const MoviesPage = (props) => {
  // console.log(props.match.url);
  // console.log(useLocation().pathname);
  return (
    <>
      <h2>Movies</h2>
      <div>
        <Switch>
          <Route
            key="movies/:moviesId"
            path="/movies/:moviesId"
            // exact={true}
            component={CardMovies}
          />
        </Switch>
      </div>
      {/* <ul>
        <Suspense fallback={<Loader />}>
          {moviesRoutes.map((route) => {
            console.log("MoviesPage info", props.match.url);
            return (
              <li key={route.path}>
                <NavLink
                  to={`${props.match.url}${route.path}`}
                  // to={`$Mo${route.path}`}
                  exact={route.exact}
                  state={{ moviesId: props.match.params.moviesId }}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </Suspense>
      </ul>
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            {moviesRoutes.map((route) => (
              <Route
                key={route.path}
                path={`${props.match.url}${route.path}`}
                // path="movies/:moviesId}"
                exact={route.exact}
                component={route.component}
                // state={{ moviesId: props.match.params.moviesId }}
                // render={() => route.component}
                // render={(props) => <About {...props} extraPropName="value" />}
              />
            ))}
          </Switch>
        </Suspense>
      </div> */}
    </>
  );
};

export default MoviesPage;
