import React, { useState, useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=6d4314c3991bf14e2dde598365e18999"
      )
      .then((response) => {
        // handle success
        setMovies([...response.data.results]);
        // console.log(movies);
      })
      .catch(function (error) {
        // handle error
        // console.log(error);
      });
  }, []);

  return (
    <ul>
      {movies.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={`/${item.id}`} exact={true}>
              {item.original_title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
