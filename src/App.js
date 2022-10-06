import React from "react";
import { useState } from "react";

import TopPage from "./Views/TopPage"; 
import MoviePage from "./Views/MoviePage"; 
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import './App.css';

import movies from './data/movies2.json';

function App() {
  const [viewState, setViewState] = useState('TopPage');
  const [contentPage, setContentPage] = useState(<TopPage movies={movies.results} navigateToMovieFunction={navigateToMovie}/>);

  function changePage(newPage, movie) {
    setViewState(newPage);

    switch(newPage) {
      case 'TopPage' : 
        setContentPage(<TopPage movies={movies.results} navigateToMovieFunction={navigateToMovie} />);
        break;
      case 'MoviePage' :
        setContentPage(<MoviePage movie={movie} />);
        break;
    }
  }

  function searchMovie(text) {
    console.log("Searched text: " + text); 
  }

  function getMoviesByGenre(genreId) {
    console.log("Showing movie by Id" + genreId);
  }

  function navigateToMovie(movie) {
    changePage("MoviePage", movie);
  }
  
  return (
    <div className="App">
      <SearchBar searchMovieFunction={searchMovie} />
      <div className="column-container">
        <Header changePageFunction={changePage}  getMoviesByGenreFunction={getMoviesByGenre}/>
        {contentPage}
      </div>
      <Footer/>
    </div> 
  )

}

export default App;
