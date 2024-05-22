import RestutantCard from "./RestutantCard";
import resList from "../utilties/Mockdata";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
 //not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<<Unique Id
  let Bodycomponent = () =>{

    //local state Varible in React for that we used hooks
let  [listOfResturants  , setListOfResturants ] = useState([]);
useEffect(() =>{
fetchData ();
} , [])
const fetchData = async() => {
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    
  );
  const json = await data.json();
  console.log(
    json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
  )
  
  setListOfResturants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
 if(listOfResturants.length == 0){
   return <Shimmer/>

 }


    return (
       <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={
            () =>
         // onClick will take the cllback function  
            {
              fetchData();
            //filter logic here
            const filterList =listOfResturants.filter(res =>res.info.avgRating > 4

            );
           setListOfResturants(filterList)
            }} 
            >
              Top Rated Restutants</button>
        </div>

        <div className="res-container">
    {listOfResturants.map((restaurant) =>(
      <RestutantCard key ={restaurant.info.id} resData ={restaurant}/>
    )
    )}  
        </div>
       </div>
       
    )
}
export default Bodycomponent;