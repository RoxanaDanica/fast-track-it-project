import React from "react";
import Movie from "../Components/Movie";
import '../Styles/TopPage.css';

function TopPage(props){
    let cards = props.movies.map((item, index)=> {
        return <Movie movie={item} key={index}/>
    })
    return(
        <div className="toppage-div">
            {cards}
            <div className="contents-div"></div>
        </div>
    )
}
export default TopPage;