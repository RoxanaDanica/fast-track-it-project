import React from "react";
import MoviePage from "./MoviePage";
import movies from '../data/movies2.json';
import Movie from "../Components/Movie";
import '../Styles/TopPage.css';
import Header from '../Components/Header';

function TopPage(props){
    let cards = movies.results.map((item, index)=> {
        return <Movie movie={item} key={index}/>
    })
    return(
        <div className="toppage-div">
            <Movie movie={movies.results[0]}/>
            {cards}
            <Header changeStateFunction={props.changeStateFunction}/>
            <div className="contents-div"></div>
        </div>
    )
}
export default TopPage;