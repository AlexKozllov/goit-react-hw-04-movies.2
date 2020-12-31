import React, { useState, useEffect } from "react";
import { getMovieCredits } from "../../../services/getData";
// import CastList from "./castCss";
import CastList from "./castCss";
// import queryString from "query-string";

const Cast = (props) => {
  const [moviesCredits, setMoviesCredits] = useState([]);
  const [moviesId, setMoviesId] = useState("");

  // const idParse = queryString.parse(props.location.pathname);
  // console.log("props", props);
  // console.log("props.match.params.moviesId", props.match.params.moviesId);
  // props.match.params.moviesId && setMoviesId(props.match.params.moviesId);
  useEffect(() => {
    // getMovieCredits(moviesId)
    getMovieCredits("614911")
      .then((credits) => {
        setMoviesCredits([...credits]);
        // console.log("credits", credits);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <ul>
        {moviesCredits.map((item) => {
          console.log("item", item);
          return (
            <CastList key={item.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.original_name}
              ></img>
              <p>{item.original_name}</p>
              <p>{item.character}</p>
            </CastList>
          );
        })}
      </ul>
    </>
  );
};

export default Cast;
