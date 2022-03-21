import { createSlice} from "@reduxjs/toolkit";
import { initialState, getPeople, getWithId } from "./PeopleAsyncThunk";
  

// people
const peopleSlice = createSlice({
    name: 'People',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // get all
    
         builder.addCase(getPeople.pending, (state, action) => {
           state.Loading = true;
        });
         builder.addCase(getPeople.fulfilled, (state, {payload}) => {
            state.Loading = false;
            state.people = payload;
         });
         builder.addCase(getPeople.rejected, (state, action) => {
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
             state.people.push(payload);
          });
          builder.addCase(getWithId.rejected, (state, action) => {
             state.Loading = false;
             if(action.payload) {
                state.error = action.payload;
             }
          });        
 
    }
});







export default peopleSlice.reducer