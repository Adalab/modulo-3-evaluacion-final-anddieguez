import React from "react";
import { Link } from 'react-router-dom';

function MovieDetail ({movie}) {
    
    return (
    
    <article className="detail">
        <a href="#">
        <img className="card__image-click"
        src={movie.poster}
        alt={movie.name}
        title={movie.name}
        />
    </a>

    
    <h4 className="card__title-click">{movie.name}</h4>
    <p className="card__description-click">{movie.line}</p>
    <p className="card__director-click">{movie.director}</p>

    <a className="card__audio-click" href={movie.audio} title="Ir al audio" target="_blank" rel="noreferrer"> Escuchar audio</a>

    <div>
    <Link to="/">Volver</Link>
    </div>
</article>
        
    )
}

export default MovieDetail;





