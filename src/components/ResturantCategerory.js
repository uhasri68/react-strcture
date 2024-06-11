import ItemList from "./ItemList";
import { useState } from "react";
const ResturantCategerory = ({data}) =>{
  const [showItems, setShowItems] = useState(false)

const handleClick = () =>{
  setShowItems(!showItems)
}
  //passing props  return jsx(accordian)
  return <div>
    {/*Header*/}
    <div className=" w-6/12 bg-gray-100 shadow-lg p-4 mx-auto my-4">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>+</span>
    </div>
    {/*Accordian Body*/}
   {showItems && <ItemList items={data.itemCards}/>} 
  </div></div>
}
export default ResturantCategerory;