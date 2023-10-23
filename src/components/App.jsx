
import "../styles/App.scss";
import getDataFromApi from "../servicies/api";
import ListMovie from "./ListMovie";

import Filters from "./Filters";
import ls from "../servicies/localStorage";


import { useState } from "react";

import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation, matchPath } from "react-router";
import MovieDetail from "./MovieDetail";




//import MovieDetail from "./MovieDetail";



function App() {
  const [movies, setMovies] = useState (ls.get("movies", []));
  const [nameFilter, setNameFilter] = useState ("");
  const [yearFilter, setYearFilter] = useState ("");


  //Limpiar listado

  useEffect (()=>{
    if(ls.get("movies",null)===null){
      
    
    getDataFromApi().then(cleanData =>{
      setMovies(cleanData);
      
      ls.set("movies", cleanData)
    
    })
    }
    
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

    //console.log(years)

    //Hacer que no se repitan los años en el desplegable
    const getYears = () => {
      const years = movies.map(movie=>movie.year);//array con los años
      //estructura de datos SET --> de un listado, sol me quedo con los valores que son únicos
       const uniquesYears = new Set(years);
       const uniquesArray = [...uniquesYears];
       return uniquesArray;
    };


//Buscar el usuario basado en el id de la ruta
//1. ENCONTRAR EL ID

const { pathname } = useLocation();

const routeData = matchPath('/movie/:id', pathname);
//console.log(routeData);
const movieId = routeData !==null ? routeData.params.id : null;
//console.log(movieId);
//buscar una movie basada en un id

const movieData= movies.find((movie)=>movie.id === movieId);


  return (
  
  <>
   <header className="Header">
    <h1 className="header__title">Owen Wilson's "wow"</h1>
  </header>
  <main className="main">
    <Routes>

      <Route
      path="/"
      element={
        <>
      <Filters nameFilter={nameFilter} handleChange={handleChange} yearFilter={yearFilter} handleChangeYear={handleChangeYear} years={getYears()}/>
    <section className="section__list">
  <ListMovie movies = {filterMovies} nameFilter={nameFilter}/>
  </section>
  </>
  }
      />
      <Route
      path="/movie/:index"
      element={<MovieDetail movie={movieData}/>}
      />

    </Routes>

    
  </main>
  </>
  );
}

export default App;
