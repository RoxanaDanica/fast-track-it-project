import React from "react";
import { useState } from "react";

import TopPage from "./Views/TopPage"; 
import MoviePage from "./Views/MoviePage"; 
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LoadingPage from "./Views/LoadingPage";

import './App.css';

import movies from './data/movies.json';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
		'X-RapidAPI-Host': 'advanced-movie-search.p.rapidapi.com'
	}
};

function App() {
  const [viewState, setViewState] = useState('TopPage');
  const [contentPage, setContentPage] = useState(<TopPage movies={movies.results} navigateToMovieFunction={navigateToMovie}/>);
  const [foundMovies, setFoundMovies] = useState([]);

  function changePage(newPage, elementsToDisplay) {
    setViewState(newPage);

    switch(newPage) {
      case 'TopPage' : 
        setContentPage(<TopPage movies={elementsToDisplay} navigateToMovieFunction={navigateToMovie} />);
        break;
      case 'MoviePage' :
        setContentPage(<MoviePage movie={elementsToDisplay} />);
        break;
      case 'LoadingPage' : 
        setContentPage(<LoadingPage/>);
        break;
    }
  }

  function searchMovie(text) {
    changePage('LoadingPage');
    fetch(`https://advanced-movie-search.p.rapidapi.com/search/movie?query=${text}&page=1`, options)
      .then(response => response.json())
      .then(response => {
        setFoundMovies(response.results);
        changePage("TopPage", response.results);
      })
      .catch(err => console.error(err));
  }

  function getMoviesByGenre(genreId) {
    changePage('LoadingPage');
    fetch(`https://advanced-movie-search.p.rapidapi.com/discover/movie?with_genres=${genreId}&page=1`, options)
      .then(response => response.json())
      .then(response => {
        setFoundMovies(response.results);
        changePage("TopPage", response.results);
      })
      .catch(err => console.error(err));
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
