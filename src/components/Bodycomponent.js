import RestutantCard from "./RestutantCard";
import resList from "../utilties/Mockdata";
 //not using keys (not acceptable) <<<<< index as key <<<<<<<<<<<<<<<Unique Id
  const Bodycomponent = () =>{
    return (
       <div className="body">
        <div className="filter">
          {/* onClick will take the cllback function */}
          <button className="filter-btn" 
          onClickon={() =>
            {console.log("button clicked")

            }} 
            >
              Top Rated Restutants</button>
        </div>

        <div className="res-container">

      {/* <RestutantCard resData ={resList[0]}/>
      <RestutantCard resData ={resList[1]}/>
      <RestutantCard resData ={resList[2]}/>
      <RestutantCard resData ={resList[3]}/>
      <RestutantCard resData ={resList[4]}/>
      <RestutantCard resData ={resList[5]}/>
      <RestutantCard resData ={resList[6]}/>
      <RestutantCard resData ={resList[7]}/>
      <RestutantCard resData ={resList[8]}/>
      <RestutantCard resData ={resList[0]}/> */}
    {resList.map((restaurant) =>(
      <RestutantCard key ={restaurant.info.id} resData ={restaurant}/>
    )
    )}  
        </div>
       </div>
       
    )
}
export default Bodycomponent;