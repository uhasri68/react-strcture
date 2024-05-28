import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Bodycomponent from "./components/Bodycomponent";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
  
const AppLayout =() => {
    return (
        <div className ="app">
            <Header/>
            <Bodycomponent/>
        </div>
    )
};
appRouter = createBrowserRouter([
    {
path : "/",
element : <AppLayout/>,
errorElement : <Error/>

},
{
    path : "/about",
    element : <About/>

},
{
    path : "/contact",
    element : <Contact/>
}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>)
