import React from "react";

function MoviePage(props){

    return(
        <div className="MoviePage-div">
            <img className="MoviePage-img" src={props.movie.poster_path}/>
            <h2>{props.movie.title}</h2>
            <h5>{props.movie.release_date}</h5>
            <h5>{props.movie.popularity}</h5>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default MoviePage;