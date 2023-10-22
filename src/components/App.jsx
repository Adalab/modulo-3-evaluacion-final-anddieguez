//imports dependencias, imagenes, componentes, estilos
import reactLogo from "../images/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.scss";
import getDataFromApi from "../servicies/api";
import ListMovie from "./ListMovie";
import Filters from "./Filters";

// Fichero src/components/App.jsx

import { useState } from "react";

import { useEffect } from "react";
//import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState ([]);
  const [nameFilter, setNameFilter] = useState ("");
  const [yearFilter, setYearFilter] = useState ("");


  useEffect (()=>{
    getDataFromApi().then(cleanData =>{
      setMovies(cleanData); 
    })
  }, []);

  const handleChange = (value) => {
    setNameFilter(value);
  };

  const handleChangeYear = (value) => {
    setYearFilter(value);
  };

  const filterMovies = movies.filter(movie=>
    movie.name.toLowerCase().includes(nameFilter)
    ).filter(item =>{
      if(yearFilter === ""){
        return true;
      } else {
        return yearFilter === item.year;
      }
      
    });

    const years = movies.map(movie=>movie.year)

    console.log(years)


  return (
  
  <>
  <main className="main">
    <Filters nameFilter={nameFilter} handleChange={handleChange} yearFilter={yearFilter} handleChangeYear={handleChangeYear} years={years}/>
    <section className="section__list">
  <ListMovie movies = {filterMovies} />
  </section>
  </main>
  </>
  );
}

export default App;
