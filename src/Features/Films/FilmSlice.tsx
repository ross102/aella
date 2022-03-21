import { createSlice} from "@reduxjs/toolkit";
import { initialState,  getWithId } from "./FilmsAsyncThunk";
  

// films
const filmSlice = createSlice({
    name: 'Films',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

          //get with id
         builder.addCase(getWithId.pending, (state, action) => {
            state.Loading = true;
         });
         builder.addCase(getWithId.fulfilled, (state, {payload}) => {
             state.Loading = false;
             state.films.push(payload);
          });
          builder.addCase(getWithId.rejected, (state, {payload}) => {
             state.Loading = false;
             if(payload) {
               state.error = payload
            }
          });        
 
    }
});







export default filmSlice.reducer;