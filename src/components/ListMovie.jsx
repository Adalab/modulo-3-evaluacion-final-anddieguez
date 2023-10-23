import React from "react";
import ItemMovie from "./ItemMovie";
import { Link } from "react-router-dom";

const ListMovie = ({ movies, nameFilter }) => {
  if (movies.length === 0) {
    return (
      <li className="movie-list__notfound">
        <p>
          Ningún título coincide con "{nameFilter}". ¡Inténtalo de nuevo!
        </p>
      </li>
    );
  } else {
    const renderMovies = movies.map((movie) => (
      <li key={movie.id} className="card">
        <Link to={"/movie/" + movie.id}>
          <ItemMovie movie={movie} />
        </Link>
      </li>
    ));

    return (
      <>
        <ul className="cards">{renderMovies}</ul>
      </>
    );
  }
};

export default ListMovie;

/*const ListMovie = ({movies}) => {

    const renderMovies = movies.map((movie, index) =>{
        return (

         <li key={index} className="card" >   
        
            <ItemMovie movie={movie}/>
          
        </li>
       
    );
    });

return (
<>
<ul className="cards">{renderMovies}</ul>
</>

);

};
export default ListMovie;*/
