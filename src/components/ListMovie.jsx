import React from "react";
import ItemMovie from "./ItemMovie";

const ListMovie = ({movies}) => {

    const renderMovies = movies.map(movie =>{
        return <li className="card" >
            <ItemMovie movie={movie}/>
        </li>
    })

return (
<>
<ul className="cards">{renderMovies}</ul>
</>

);

};


export default ListMovie;