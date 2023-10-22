//imports dependencias, imagenes, componentes, estilos
import reactLogo from "../images/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.scss";
import getDataFromApi from "../servicies/api";

// Fichero src/components/App.jsx

import { useState } from "react";
import ListMovie from "./ListMovie";
import { useEffect } from "react";
//import { Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState ([]);


  useEffect (()=>{
    getDataFromApi().then(cleanData =>{
      setMovies(cleanData); 
    })
  }, []);


  return (
  
  <>
  <ListMovie movies = {movies} />
  </>
  );
}

export default App;
