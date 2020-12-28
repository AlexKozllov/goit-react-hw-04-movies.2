import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/getData";

const CardMovies = ({ match }) => {
  const [details, setDeteils] = useState({});
  console.log("useHistory", useHistory());
  useEffect(() => {
    getMovieDetails(match.params.moviesId).then((data) => {
      data && setDeteils(data);
      details.poster_path && img;
    });
    // console.log(useParams());
    // console.log(getMovieDetails(props.moviesId));
  }, []);
  return (
    <div>
      <h2>CardMovies</h2>
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
    </div>
  );
};

export default CardMovies;