import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //big reducer
    reducer:{
        ///having small reducers(cart resducer)
     carts: cartReducer,
    }

});

export default appStore;