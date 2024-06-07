import { useState } from "react";
//Functional Component
const User =(props) =>{
    //acessing props here*/
const [count , setcount] = useState(0)
    return <div className="user-card">
        <h2>Name: {props.name}</h2>
        <h2>Location : Hyderabad</h2>
        <h3>count : {count}</h3>
    </div>
}
export default User;
