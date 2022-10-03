import React from "react";
import '../Styles/Movie.css'
import MoviePage from "../Views/MoviePage";

function Movie(props){
    return (
        <div className="Movie-div" onClick={() => {props.navigateToMovieFunction(props.movie)}} >
            <img className="Movie-img" src={props.movie.poster_path}/>
            <h2>{props.movie.title}</h2>
            <h5>{props.movie.release_date}</h5>
            <h5>{props.movie.popularity}</h5>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default Movie;