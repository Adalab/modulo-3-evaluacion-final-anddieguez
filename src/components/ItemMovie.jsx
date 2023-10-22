import React from "react";


const ItemMovie = ({movie}) => {

return (
<>

    <a href="#">
        <img className="card__image"
        src={movie.poster}
        alt={movie.name}
        title={movie.name}
        />
    </a>
    <h4 className="card__title">{`${movie.name} / ${movie.year}`}</h4>
    <p className="card__description">{movie.line}</p>
   



</>

);

};


export default ItemMovie;