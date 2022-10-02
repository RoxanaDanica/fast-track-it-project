import React from "react";
import { useState } from "react";
import TopPage from "./Views/TopPage"; 
import MoviePage from "./Views/MoviePage"; 
import SearchBar from "./Components/SearchBar";
import Header from "./Components/Header";

import movies from './data/movies2.json';

function App() {
  const [viewState, setViewState] = useState('TopPage');
  const [contentPage, setContentPage] = useState();

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
  
  return (
    <div>
      <SearchBar />
      <Header changePageFunction={changePage} />
      {contentPage}
    </div> 
  )

}

export default App;
