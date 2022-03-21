import { createAsyncThunk } from "@reduxjs/toolkit";
import StarShipApi from '../../Resource/StarShipApi'



interface StarShipState  {
    
    
        name: string,
        model: string,
        manufacturer: string,
        cost_in_credits: string,
        length: string,
        max_atmosphering_speed: string,
        crew: string,
        passengers: string,
        cargo_capacity: string,
        consumables: string,
        hyperdrive_rating: string,
        MGLT: string,
        starship_class: string,
        pilots: string[],
        films: string
        created: string,
        edited: string,
        url: string
    

}



// StarShipState interface
interface StarShip {
    starships: StarShipState[] 
    Loading: boolean;
    error: string
}



export const initialState : StarShip = {
    starships: [],
    Loading: false,
    error: ""
}



// get the starship Array

export const getStarships = createAsyncThunk<
StarShipState[],
 void,
 { rejectValue: string }

>(
    "starShips/getStarShips",
    async (args, { rejectWithValue}) => {

        try {
            const res = await StarShipApi.getAll();   
            if(res.status === 200 || res.status === 201) {
                return res.data.results;
          }
        } catch(error) {
             // error handling. 
             // we can also give unique responses with the status codes but this will pass
             if(error) {
            return    rejectWithValue('failed to fetch') 
              }
        }
    })

     


  // get the planet Object using unique ids

export const getWithId = createAsyncThunk<
StarShipState,
string,
{ rejectValue: string }

>(
   "starships/getStarships/:id",
   async (id, { rejectWithValue}) => {

    try {
        const res = await StarShipApi.getWithId(id);   
        if(res.status === 200 || res.status === 201) {
              return res.data;
        }
    } catch(error) {

            
        if(error) {
            return rejectWithValue('failed to fetch')          
          }
    }
     
   }  
 )
