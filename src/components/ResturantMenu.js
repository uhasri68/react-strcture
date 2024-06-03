// import React from "react";
// import { useEffect , useState} from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// const ResturantMenu = () => {
//   const [resinfo , setResInfo] =useState(null)
// const {resId} = useParams()
//   useEffect(() =>{
//     fetchMenu();
//   }, [])

//   const fetchMenu = async() =>{
//     const resMenu =  await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${`resId`}&catalog_qa=undefined&submitAction=ENTER");
//     const json = await resMenu.json();
//     console.log(json);
//     setResInfo(json);
//    }
 
//   if(resinfo === null) return <Shimmer/>

//   // destructure here after the loading check
//   const {name,
//       city,
//       cuisines,
//        costForTwoMessage,
//         avgRating} = resinfo.data.cards[2].card.card.info;

//   return(
//     <div className="menu">
//         <h3>{name}</h3> 
//         <h3>{city}</h3>
//         <ul>
//             <li>{cuisines}</li>
//             <li>{costForTwoMessage}</li>
//             <li>{avgRating}</li>
//         </ul>
//     </div>
//   )
// }

// export default ResturantMenu;

import React from "react";
import { useEffect , useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const ResturantMenu = () => {
  const [resinfo , setResInfo] =useState(null)
  const {resId} = useParams()

  useEffect(() =>{
    fetchMenu();
  }, [resId])

  const fetchMenu = async() =>{
    const resMenu =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    const json = await resMenu.json();
    console.log(json);
    setResInfo(json);
   }
 
  if(resinfo === null) return <Shimmer/>

  // destructure here after the loading check
  const {name,
      city,
      cuisines,
       costForTwoMessage,
        avgRating} = resinfo?.data?.cards[2]?.card?.card?.info;

  return(
    <div className="menu"> 
        <h3>{name}</h3> 
        <h3>{city}</h3>
        <ul>
            <li>{cuisines}</li>
            <li>{costForTwoMessage}</li>
            <li>{avgRating}</li>
        </ul>
    </div>
  )
}

export default ResturantMenu;