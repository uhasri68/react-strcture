import { Link } from "react-router-dom";
import {LOGO_URL } from "../utilties/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilties/useOnlineStatus";
import UserContext  from "../utilties/UserContext"
import { useSelector } from "react-redux";
const Header = () =>{
    let [btnReactLogin , setbtnReactLogin] =useState("Login") 
    const onlineStatus  = useOnlineStatus();
    //userContet is a hook
    const {loggedInUser} = useContext(UserContext);
    //useSelector hook is given by react-redux
    const cartItems = useSelector((store) => store.cart.items)

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
                    <li className="px-4"><Link to ="/Cart">Cart-({cartItems.length} items)</Link></li>
                    <li className="px-4">{loggedInUser}</li>
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