import { Link } from "react-router-dom";
import {LOGO_URL } from "../utilties/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilties/useOnlineStatus";

const Header = () =>{
    let [btnReactLogin , setbtnReactLogin] =useState("Login") 
    const onlineStatus  = useOnlineStatus();


    let btnName = "Login"
    console.log("render")
    return (
        <div className ="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                <li>online Status {onlineStatus ? "OL" : "OFF"}</li>

                <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About</Link></li>
                    <li><Link to ="/contact">Contact</Link></li>
                    <li>Cart</li>
        <button className="login" onClick={() => {
            btnReactLogin === "Login"?
            setbtnReactLogin ("Logout") : setbtnReactLogin("Login")
            console.log(btnName);
        }}>{btnReactLogin}</button>
        

                </ul>
            </div>
        </div>
    )};
export default Header;