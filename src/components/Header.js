import {LOGO_URL } from "../utilties/constants";
import { useState } from "react";

const Header = () =>{
    let [btnReactLogin , setbtnReactLogin] =useState("Login") 
    let btnName = "Login"
    console.log("render")
    return (
        <div className ="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL} ></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
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