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


  //Limpiar listado
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


  //Filtrado
  const filterMovies = movies.filter(movie=>
    movie.name.toLowerCase().includes(nameFilter)
    ).filter((item) =>{
      if(yearFilter === ""){
        return true;
      } else {
        return yearFilter.includes(item.year);
      }
      
    });


    const years = movies.map(movie=>movie.year);

    console.log(years)

    //Hacer que no se repitan los años en el desplegable
    const getYears = () => {
      const years = movies.map(movie=>movie.year);//array con los años
      //estructura de datos SET --> de un listado, sol me quedo con los valores que son únicos
       const uniquesYears = new Set(years);
       const uniquesArray = [...uniquesYears];
       return uniquesArray;
    };



  return (
  
  <>
  <main className="main">
    <Filters nameFilter={nameFilter} handleChange={handleChange} yearFilter={yearFilter} handleChangeYear={handleChangeYear} years={getYears()}/>
    <section className="section__list">
  <ListMovie movies = {filterMovies} />
  </section>
  </main>
  </>
  );
}

export default App;
