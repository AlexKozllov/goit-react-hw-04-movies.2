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

// import React, { Suspense } from "react";
// import { Switch, Route } from "react-router-dom";
// import { mainRoutes } from "../../routes/mainRoutes";
// import Loader from "../loader/Loader";

// const NavigationRoutes = () => {
//   return (
//     <Suspense fallback={<Loader />}>
//       <Switch>
//         {mainRoutes.map((route) => (
//           <Route
//             key={route.path}
//             path={route.path}
//             exact={route.exact}
//             component={route.component}
//           />
//         ))}
//       </Switch>
//     </Suspense>
//   );
// };

// export default NavigationRoutes;
