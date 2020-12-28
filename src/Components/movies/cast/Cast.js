import React from "react";

const Cast = (props) => {
  const goHome = () => {
    props.history.push({
      pathname: "/",
      // search: "?category=adventure",
      // hash: "#treasure-island",
      state: { from: props.location.pathname },
    });
  };
  return (
    <>
      <h2>Cast</h2>
      <button onClick={goHome}>Go home</button>
    </>
  );
};

export default Cast;
