import React from "react";

//  括號裡props可寫成 {ProName, location, sqft}
//  {}裡的 props則可省略
const MainContent = (props) => {

    // button handler
    const buttonHandler = (msg) =>{
        alert(msg);
    };

    return(
        <div>
           <h1>Peoject type: {props.ProName} </h1>
           <h2>Location: {props.location} </h2>
           <p>Size: {props.sqft} sqft</p>
           <button onClick= { () => {buttonHandler("You need to pay to read!")}}>read more</button>
        </div>
    );
};

export default MainContent;



