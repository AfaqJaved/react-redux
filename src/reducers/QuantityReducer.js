import { createSlice } from "@reduxjs/toolkit"

// intial state
 const initialState = {
    value : 0
 }

// Slice ---> Reducers ---> action types
 const quantitySlice = createSlice({
    name : "quantity",
    initialState,
    reducers : {
        increaseQuantity : (state,payload) => {
            // main logic which will run against this action type = increaseQuantity
            console.log(payload);
            state.value += payload.payload;
        }
    }
 });

 export const {increaseQuantity} = quantitySlice.actions;
 export default quantitySlice.reducer;
