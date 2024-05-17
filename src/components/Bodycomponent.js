import RestutantCard from "./RestutantCard";
import resList from "../utilties/Mockdata";
import {useState} from "react";
 //not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<<Unique Id
  let Bodycomponent = () =>{

    //local state Varible in React for that we used hooks
let  [listOfResturants  , setListOfResturants ] = useState(resList)
//   {
//     "info": {
//           "id": "11091",
//           "name": "Pizza Hut",
//           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//           "areaName": "Rambagh Colony",
//           "costForTwo": "₹300 for two",   
//              "avgRating": 4.1,
         
//         },}, { 
//            "info": {
//           "id": "11092",
//           "name": "Kritunga",
//           "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//           "areaName": "Rambagh Colony",
//           "costForTwo": "₹300 for two",   
//              "avgRating": 4.3,
         
//         },},{
//           "info": {
//                   "id": "11095",
//                   "name": "KFC",
//                   "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
//                   "areaName": "Rambagh Colony",
//                   "costForTwo": "₹300 for two",   
//                      "avgRating": 3.8,
                 
//                 },
// }
      
// ]);

    return (
       <div className="body">
        <div className="filter">
          <button className="filter-btn" 
          onClick={() =>
         // onClick will take the cllback function  
            {console.log("button clicked")
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