import React from "react";
import NavigationLinks from "./navigation/NavigationLinks";
import "./App.css";
import NavigationRoutes from "./navigation/NavigationRoutes";

const App = () => {
  return (
    <>
      <NavigationLinks />
      <NavigationRoutes />
    </>
  );
};

export default App;
