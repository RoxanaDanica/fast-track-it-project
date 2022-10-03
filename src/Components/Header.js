import React from "react";

import "../Styles/Header.css";

function Header(props) {

    return(
        <div className="Header-div">
           <button onClick={() => {props.getMoviesByGenreFunction(28)}}>Action</button>
           <button onClick={() => {props.getMoviesByGenreFunction(12)}}>Adventure</button>
           <button onClick={() => {props.getMoviesByGenreFunction(35)}}>Comedy</button>
           <button onClick={() => {props.getMoviesByGenreFunction(80)}}>Crime</button>
           <button onClick={() => {props.getMoviesByGenreFunction(18)}}>Drama</button>
           <button onClick={()=> {props.changePageFunction('TopPage')}}>TopPage</button>
           <button onClick={()=> {props.changePageFunction('MoviePage')}}>MoviePage</button>
        </div>
    )
}

export default Header;