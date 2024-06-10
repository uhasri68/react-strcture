import { CDN_URL } from "../utilties/constants";
const RestutantCard= (props) =>{
    const { resData } = props;
    const { info } = resData;

    //Destrcuring 
    const {
      name, 
      areaName,
      cuisines,
      costForTwo, 
      avgRating,
      sla
    } = resData?.info;
     return ( 
    <div className="m-4 p-4 w-[230px] rounded-lg bg-gray-50 hover:bg-gray-200">
    <img 
      alt="res-logo" 
      className="rounded-lg"
      src={CDN_URL+ info.cloudinaryImageId}></img>
    <h5 className="font-bold py-3">{name}</h5>
    <h5>{areaName}</h5>
    <h5 className="truncate md:overflow-clip">{cuisines}</h5>
    <h5>{costForTwo}</h5> 
   <h5>{avgRating} stars</h5> 
   <h5>{sla?.slaString}</h5> 


  </div>
      
     )
  }
export default RestutantCard;