import React from "react";
import ItemMovie from "./ItemMovie";

const ListMovie = ({movies}) => {

    const renderMovies = movies.map((movie, index) =>{
        return <li key={index} className="card" >
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