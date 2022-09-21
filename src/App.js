import React from "react";
import { useState } from "react";
import TopPage from "./Views/TopPage"; 
import MoviePage from "./Views/MoviePage"; 

function App() {
  const [viewState, setViewState] = useState('TopPage');


  switch(viewState) {
    case 'TopPage' : return (<TopPage changeStateFunction={setViewState} />)
    case 'MoviePage' : return (<MoviePage changeStateFunction={setViewState}/>) 

  }

}

export default App;
