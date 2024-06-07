import React from "react";

//Class Base component
class UserClass extends React.Component{
        constructor(props){
            console.log("Child Constrcutor")
        super(props)
        //creaing multiple state varibels
        this.state = {
            count :0,
            userInfo:{
           name:"Dummy",
           location: "default"
            }

        }

        }
        async componentDidMount(){
            //console.log("Child ComponentDid mount is called")
            const data = await fetch("https://api.github.com/users/akshaymarch7")
            const json = await data.json()
            console.log(json)
            
            this.setState({
                userInfo : json,
            })

        }
componentDidUpdate(){
    console.log("component Did Update is called")
}
    //Render method can be used to convert html and render it on web page
    render(){
        console.log("Child Render")
        debugger
        return(
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Count:{this.state.count}</h3>
                <button onClick={()=>{
                    //NEVER UPDATE STATE VARIBLES DIRECTLY
                    this.setState({
                        count: this.state.count+1
                    })

                }}>Count Increase</button>

                <div>
                <h1>{this.state.userInfo.name}</h1>
                <h1>{this.state.userInfo.location}</h1>
                </div>
            </div>
        )
    }
} 

export  default UserClass;
/******
 * ----Mounting Life Cycle-----
 * constrctor(dummy)
 *  Render(dummy)
 * <HTML Dummy> Load
 * Compnent Did Mount
 * <API Call>
 * <this.setState> --State varible is updated
 *  
 * UPDATE CYCLE BEGINS
 * render(Api data)
 * <HTML (new API data)> 
 * ComponentDidUpdate()
 * 
 *
 * 
 * 
 * 
 * */