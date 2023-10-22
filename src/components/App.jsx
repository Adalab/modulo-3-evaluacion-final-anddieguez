//imports dependencias, imagenes, componentes, estilos
import reactLogo from "../images/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.scss";

// Fichero src/components/App.jsx

import { useState } from "react";
import ListMovie from "./ListMovie";
//import { Routes, Route } from "react-router-dom";

function App() {


  return (
  
  <>
  <ListMovie />
  </>
  );
}

export default App;
