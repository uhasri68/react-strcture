import { createSlice } from "@reduxjs/toolkit";
 
const cartSlice =  createSlice({
    name: 'cart',
    initialState: {
        items: ["biryani" , "Rotis", "soup"]
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
             state.items.length = 0; // Empties the array
        }
    }
});

export  const { addItem , clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer; // Export the generated reducer
//export actions and reducers