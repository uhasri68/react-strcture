import RestutantCard from "./RestutantCard";
// import resList from "../utilties/Mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
//not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<<Unique Id
let Bodycomponent = () => {
  //local state Varible in React for that we used hooks
  let [listOfResturants, setListOfResturants] = useState([]);
  const [searchText, setSearchText ] = useState("")
  let [filterdResturant , setFilterdResturants] =  useState([])

  //Whenever state varible is update , react triggers a reconcoliation cycle(re-render the component)
  console.log("Body render")
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    console.log(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants,
    );

    // setListOfResturants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    // );
    // setFilterdResturants(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    // );
    let restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfResturants(restaurants);
    setFilterdResturants(restaurants)
  };
  //conditinal Rendering
  // if (listOfResturants.length == 0) {
  //   return <Shimmer />;
  // }

  return  (listOfResturants.length == 0)? <Shimmer />: (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="searchbox" value={searchText}  onChange={(e)=>{
            setSearchText(e.target.value);
          }}></input>
          {/* <button onClick={() =>{
            //Filter the resturants cards and update the UI
            const filterdResturant = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(searchText);
            setListOfResturants(filterdResturant)
          }}>Search</button> */}
           <button onClick={() => {
        const filterdList = listOfResturants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setFilterdResturants(filterdList); // set the filtered restaurants based on search text to filterdResturants
    }}>
        Search
    </button>
        </div>


        {/* <button
          className="filter-btn"
          onClick={() =>
            // onClick will take the cllback function
            {
              fetchData();
              //filter logic here
              const filterList = listOfResturants.filter(
                (res) => res.info.avgRating > 4,
              );
              setListOfResturants(filterList);
            }
          }
        >
          Top Rated Restutants
        </button> */
        <button
      className="filter-btn"
      onClick={() => {
        const filterList = listOfResturants.filter((res) => res.info.avgRating > 4);
        setFilterdResturants(filterList);
      }}
    >
      Top Rated Resturants
    </button>
        }
      </div>
      <div className="res-container">
      {filterdResturant.map((restaurant) => (
       <Link key={restaurant.info.id} 
       to={"/resturant/"+restaurant.info.id}><RestutantCard resData={restaurant} /></Link> 
      ))}
    </div>
    </div>
  );
};
export default Bodycomponent;
