import React, { useState, useEffect, Suspense } from "react";

import { useHistory, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/getData";

import { moviesRoutes } from "../../routes/moviesRoutes";
import { NavLink, Route, Switch, useLocation } from "react-router-dom";
import Loader from "../loader/Loader";
// import CardMovies from "../Components/cardMovies/CardMovies";

const CardMovies = (props) => {
  const [details, setDeteils] = useState({});
  console.log("props.match.params.moviesId", props.match.params.moviesId);
  useEffect(() => {
    getMovieDetails(props.match.params.moviesId).then((data) => {
      data && setDeteils(data);
      console.log("data", data);
      // details.poster_path && img;
    });
    // console.log(useParams());
    // console.log(getMovieDetails(props.moviesId));
  }, []);
  return (
    <div>
      <h2>CardMovies</h2>
      {details.poster_path && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
            alt={details.original_title}
          ></img>
          <div>
            <h3>{details.original_title}</h3>
            <p>
              User score: <span>{details.vote_average * 10}</span>%
            </p>
            <h4>Overviev</h4>
            <p>{details.overview}</p>
            <h4>Ganres</h4>
            <ul>
              {details.genres &&
                details.genres.map((item) => {
                  return <li key={item.id}>{item.name}</li>;
                })}
            </ul>
          </div>
        </>
      )}
      <ul>
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
                // component={route.component}
                state={{ moviesId: props.match.params.moviesId }}
                // render={() => route.component}
              />
            ))}
          </Switch>
        </Suspense>
      </div>
    </div>
  );
};

export default CardMovies;
