import React from "react";
import { useEffect } from "react";

const ResturantMenu = () => {
useEffect(() =>{
fetchMenu();

}, [])
const fetchMenu = async() =>{
  const resMenu =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=659668&catalog_qa=undefined&submitAction=ENTER");
  const json = await resMenu.json();
  console.log(json);

}


  return(
    <div className="menu">
        <h3>Name of the Resturant </h3> 
        <h3>Menu</h3>
        <ul>
            <li>Biryani</li>
            <li>Chinese</li>
            <li>Italian Food</li>
        </ul>
    </div>
  )
}

export default ResturantMenu;