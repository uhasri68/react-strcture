import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css'

const Header = () =>{
    return (
        <div className ="header">
            <div className="logo-container">
                <img  className="logo"  src ="https://cdn3.vectorstock.com/i/1000x1000/24/12/food-chat-app-logo-design-vector-34122412.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )};

    const RestutantCard= (props) =>{
      const { resData } = props;
      const { info } = resData;

      //Destrcuring 
      const {
        name, 
        areaName,
        cuisines,
        costForTwo, 
        avgRating} = resData?.info;
       return ( 
      <div className="res-card">
      <img 
        alt="res-logo" 
        className="res-logo"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ info.cloudinaryImageId}></img>
      <h5>{name}</h5>
      <h5>{areaName}</h5>
      <h5>{cuisines}</h5>
      <h5>{costForTwo}</h5> 
        <h5>{avgRating} stars</h5> 

    </div>
        
       )
    }

    //not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<<Unique Id
    const Bodycomponent = () =>{
        return (
           <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
          {/* <RestutantCard resData ={resList[0]}/>
          <RestutantCard resData ={resList[1]}/>
          <RestutantCard resData ={resList[0]}/> */}
        {resList.map((restaurant) =>(
          <RestutantCard key ={restaurant.info.if} resData ={restaurant}/>
        )
        )}  
            </div>
           </div>
           
        )
    }
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
