import { lazy } from "react";

export const moviesRoutes = [
  {
    path: "/cast",
    exact: true,
    name: "Cast",
    component: lazy(() =>
      import("../Components/movies/cast/Cast" /* webpackChunkName: "Cast" */)
    ),
  },
  {
    path: "/reviews",
    exact: true,
    name: "Reviews",
    component: lazy(() =>
      import(
        "../Components/movies/reviews/Reviews" /* webpackChunkName: "Reviews" */
      )
    ),
  },
];
