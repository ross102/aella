import { createSlice} from "@reduxjs/toolkit";
import { initialState, getPlanets , getWithId } from "./PlanetsAsyncthunk";
  

// planets
const planetSlice = createSlice({
    name: 'Planet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // get all planets
    
         builder.addCase(getPlanets.pending, (state, action) => {
           state.Loading = true;
        });
         builder.addCase(getPlanets.fulfilled, (state, {payload}) => {
            state.Loading = false;
            state.planets = payload; 
         });
         builder.addCase(getPlanets.rejected, (state, action) => {
            state.Loading = false;
            if(action.payload) {
                state.error = action.payload
            }

         });
         //get with id
         builder.addCase(getWithId.pending, (state, action) => {
            state.Loading = true;
         });
         builder.addCase(getWithId.fulfilled, (state, {payload}) => {
             state.Loading = false;
             state.planets.push(payload)
          });
          builder.addCase(getWithId.rejected, (state, action) => {
             state.Loading = false;
             if(action.payload) {
                 state.error = action.payload
             }
          });        
 
    }
});







export default planetSlice.reducer