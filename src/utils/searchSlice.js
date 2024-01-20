import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:"search",
    initialState:{},
    reducers:{
        cachResults:(state,action)=>{
            state=Object.assign(state,action.payload);
        },
    },
})
export const {cachResults}=searchSlice.actions;
export default searchSlice.reducer;