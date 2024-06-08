// import { useEffect, useState } from "react";

// const useResturantMenu =(resId)=>{
//     const [resinfo, setResinfo]  = useState(null);
//     const fetchData = async() =>{
//         const data =  await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
//         const json = await data.json();
//         setResinfo(json.data);
//     };

//     useEffect(() =>{
//         fetchData();
//     }, [resId, fetchData]);

//     return resinfo;
// };

// export default useResturantMenu;