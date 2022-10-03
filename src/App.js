import React from "react";
import { useState } from "react";

import TopPage from "./Views/TopPage"; 
import MoviePage from "./Views/MoviePage"; 
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";

import './App.css';

import movies from './data/movies2.json';

function App() {
  const [viewState, setViewState] = useState('TopPage');
  const [contentPage, setContentPage] = useState(<TopPage movies={movies.results}/>);

  function changePage(newPage) {
    setViewState(newPage);

    switch(newPage) {
      case 'TopPage' : 
        setContentPage(<TopPage movies={movies.results}/>);
        break;
      case 'MoviePage' :
        setContentPage(<MoviePage movie={movies.results[0]} />);
        break;
    }
  }

  function searchMovie(text) {
    console.log("Searched text: " + text); 
  }

  function getMoviesByGenre(genreId) {
    console.log("Showing movie by Id" + genreId);
  }
  
  return (
    <div className="App">
      <SearchBar searchMovieFunction={searchMovie} />
      <div className="column-container">
        <Header changePageFunction={changePage}  getMoviesByGenreFunction={getMoviesByGenre}/>
        {contentPage}
      </div>
    </div> 
  )

}

export default App;
