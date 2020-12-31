import React, { useState, useEffect } from "react";
import { getMovieReviews } from "../../../services/getData";
// import CastList from "./castCss";
import RevievsList from "./revievsCss";

const Reviews = () => {
  const [revievsText, setRevievsText] = useState([]);
  const [moviesId, setMoviesId] = useState("");

  useEffect(() => {
    // getMovieCredits(moviesId)
    getMovieReviews("577922")
      .then((revievs) => {
        setRevievsText([...revievs]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {revievsText.map((item) => {
        return (
          <RevievsList key={item.id}>
            <h3>{item.author}</h3>
            <p>{item.content}</p>
          </RevievsList>
        );
      })}
    </ul>
  );
};

export default Reviews;
