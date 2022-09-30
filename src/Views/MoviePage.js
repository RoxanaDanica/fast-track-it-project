import React from "react";
import TopPage from "./TopPage";
import Header from "../Components/Header";

function MoviePage(props){

    return(
        <div>
            <h1>hee</h1>
            <Header changeStateFunction={props.changeStateFunction}/>
        </div>
    
    )
}

export default MoviePage;