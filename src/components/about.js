import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//     return (
//         <div>   
//              <h3>I'm about Component</h3>
//              <User name={"Akshay Saini (function)"}/>
//              <UserClass name={"Goutham Chandra (Classes)"}/>
//         </div>
// )

// }
class About extends Component{
    constructor(props){
    super(props)
    console.log("parent Constrcutor")
  }
//   ComponentDidMount(){
//     console.log("Parent Component Did Mount is called")
//   }
componentDidMount(){
    console.log("Parent ComponentDid mount is called")
}
  render(){
    console.log("Parent Render is callled")
    return (
               <div>   
                     <h3>I'm about Component</h3>
                     <User name={"Akshay Saini (function)"}/>
                     <UserClass name={"Goutham Chandra (Classes)"}/>
                     <UserClass name={"Advika Chandra (Classes)"}/>

                 </div>
         )
        
  }
}

export default About;