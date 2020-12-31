import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { getTrending } from "../services/getData";

const Home = (props) => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    getTrending()
      .then((movies) => {
        setTrendingMovies([...movies]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {/* {console.log(searchMovies("cat"))} */}
      {/* {console.log(getMovieDetails("614911"))} */}
      {/* {console.log(getMovieCredits("614911"))} */}
      {/* {console.log(getMovieReviews("120"))} */}

      {trendingMovies.map((item) => {
        return (
          <li key={item.id}>
            <NavLink to={`/movies/${item.id}`} exact={true}>
              {item.original_title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Home;
