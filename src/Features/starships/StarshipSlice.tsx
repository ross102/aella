import { createSlice} from "@reduxjs/toolkit";
import { initialState, getStarships , getWithId } from "./StarshipsAsyncthunk";
  

// starships
const starShipSlice = createSlice({
    name: 'Starship',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // get all planets
    
         builder.addCase(getStarships.pending, (state, action) => {
           state.Loading = true;
        });
         builder.addCase(getStarships.fulfilled, (state, {payload}) => {
            state.Loading = false;
            state.starships = payload; 
         });
         builder.addCase(getStarships.rejected, (state, {payload}) => {
            state.Loading = false;
            if(payload) {
                state.error = payload
             }

         });
         //get with id
         builder.addCase(getWithId.pending, (state, action) => {
            state.Loading = true;
         });
         builder.addCase(getWithId.fulfilled, (state, {payload}) => {
             state.Loading = false;
             state.starships.push(payload);
          });
          builder.addCase(getWithId.rejected, (state, {payload}) => {
             state.Loading = false;
             if(payload) {
                state.error = payload
             } 
          });        
 
    }
});







export default starShipSlice.reducer