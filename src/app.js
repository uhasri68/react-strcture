import React from "react";
import ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Bodycomponent from "./components/Bodycomponent";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";
import ResturantMenu from "./components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "./utilties/AppStore";
import Cart from "./components/Cart";

const AppLayout =() => {
    return (
        <Provider store ={appStore}>
        <div className ="app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    )
};
appRouter = createBrowserRouter([
    {
path : "/",
element : <AppLayout/>,
children: [
    {
        path: "/",
        element: <Bodycomponent/>

    },
    {
    path : "/about",
    element : <About/>

},
{
    path : "/contact",
    element : <Contact/>
},
{
    path : "/resturant/:resId",
    element : <ResturantMenu/>
},

{
    path : "/cart",
    element : <Cart/>

},
],
errorElement : <Error/>

}
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider  router={appRouter}/>)
