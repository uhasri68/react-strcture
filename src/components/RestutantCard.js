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
      avgRating} = resData?.info;
     return ( 
    <div className="res-card">
    <img 
      alt="res-logo" 
      className="res-logo"
      src={CDN_URL+ info.cloudinaryImageId}></img>
    <h5>{name}</h5>
    <h5>{areaName}</h5>
    <h5>{cuisines}</h5>
    <h5>{costForTwo}</h5> 
      <h5>{avgRating} stars</h5> 

  </div>
      
     )
  }
export default RestutantCard;