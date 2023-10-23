import React from "react";
import { Link } from 'react-router-dom';

function MovieDetail ({movie}) {
    
    return (
    
    <article className="detail">
        <a href="#">
        <img className="card__image"
        src={movie.poster}
        alt={movie.name}
        title={movie.name}
        />
    </a>

    
    <h4 className="card__title">{movie.name}</h4>
    <p className="card__description">{movie.line}</p>
    <p className="card__director">{movie.director}</p>

    <a className="card__audio" href={movie.audio} title="Ir al audio" target="_blank" rel="noreferrer"><i className="fa-solid fa-headphones"></i> Escuchar audio</a>

    <div>
    <Link  to="/">Volver</Link>
    </div>
</article>
        
    )
}

export default MovieDetail;





