import { createSlice } from "@reduxjs/toolkit";
 
const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
           items:[]
    },
    reducers: {
        addItem: (state, action) => {
            //now modify the state based on the action
            //Mutating the state here
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
           // In this case we are not actally mutating the state we are giving the referncee to it
            //state =["Akshay"]
            //here mutating the state then the cart becmae empty in thhis case
             state.items.length = 0; // Empties the array //orginalState  = []
             return {items: []} //this object is replaced with original state ={items :[]}
        }
    }
});

export  const { addItem , clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer; // Export the generated reducer
//export actions and reducers