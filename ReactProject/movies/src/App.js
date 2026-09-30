import React from "react";
import Moviecard from "./Moviecard.js"
import MovieList from "./MovieList.js";
import Navbar from "./Navbar.js";

function App(){
  return(
    <>
    <h1>Movie</h1>
    <Navbar />
    <MovieList/>
    </>
  )
}
export default App