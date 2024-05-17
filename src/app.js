import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Bodycomponent from "./components/Bodycomponent";
 
 
  
const AppLayout =() => {
    return (
        <div className ="app">
            <Header/>
            <Bodycomponent/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
