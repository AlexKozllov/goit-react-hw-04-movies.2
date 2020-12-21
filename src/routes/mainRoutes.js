import { lazy } from "react";

export const mainRoutes = [
  {
    path: "/",
    exact: true,
    name: "Home",
    component: lazy(() =>
      import("../pages/HomePage" /* webpackChunkName: "home" */)
    ),
  },
  {
    path: "/movies",
    exact: false,
    name: "Movies",
    component: lazy(() =>
      import("../pages/MoviesPage" /* webpackChunkName: "movies" */)
    ),
  },
];
