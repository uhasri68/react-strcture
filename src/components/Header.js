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
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <img  className="w-20" src={LOGO_URL} ></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                <li className="px-4">online Status {onlineStatus ? ":green_circle:" :
                ":red_circle:"}</li>

                <li className="px-4"><Link to="/">Home</Link></li>

                    <li className="px-4"><Link to="/about">About</Link></li>
                    <li className="px-4"><Link to ="/contact">Contact</Link></li>
                    <li className="px-4">Cart</li>
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