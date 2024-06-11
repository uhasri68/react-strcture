import React from "react";
import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import ResturantCategerory from "./ResturantCategerory";
const ResturantMenu = () => {
  const [resinfo , setResInfo] =useState(null)
  const {resId} = useParams()

  useEffect(() =>{
    fetchMenu();
  }, [resId])

  const fetchMenu = async() =>{
    const resMenu =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await resMenu.json();
    //console.log(json);
    setResInfo(json);
   }
 
  if(resinfo === null) return <Shimmer/>

  // destructure here after the loading check
  const {name,
      city,
      cuisines,
       costForTwoMessage,
        avgRating} = resinfo?.data?.cards[2]?.card?.card?.info;

        //let categeroies = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card
        //console.log(categeroies)

        const categerory = resinfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
          (c)=> c.card?.["card"]?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"

        )
        //console.log(categerory)

  return(
    <div className= "text-center"> 
        <h1 className="font-bold my-6 text-2xl">{name}</h1> 
            <p>
              {cuisines.join(",")} - {costForTwoMessage}

            </p>

            {/* categerory*/}
            {categerory.map((cartitem, index) => 
            //passing props
            <ResturantCategerory  key= {index} data={cartitem?.card?.card}/>)}
    </div>
  )
}

export default ResturantMenu;