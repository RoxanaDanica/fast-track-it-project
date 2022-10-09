import React from "react";

import "../Styles/LoadingPage.css";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

function LoadingPage(){
    return(
        <div className="LoadingPage-div">
            <h1>Loading... <AiOutlineLoading3Quarters/> </h1>
        </div>
    )
}

export default LoadingPage;