import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import Loader from "../loader/Loader";

const NavigationRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        {mainRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoutes;
