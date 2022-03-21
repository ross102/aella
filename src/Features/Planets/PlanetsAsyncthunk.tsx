import { createAsyncThunk } from "@reduxjs/toolkit";
import PlanetApi from '../../Resource/PlanetApi'



interface PlanetState  {
    
        name: string,
        rotation_period: string,
        orbital_period: string,
        diameter: string,
        climate: string,
        gravity: string,
        terrain: string,
        surface_water: string,
        population: string,
        residents: string[],
        films: string[],
        created: string,
        edited: string,
        url: string
}

//Planet interface
interface Planets {
    planets: PlanetState[] 
    Loading: boolean;
    error: string
}



export const initialState : Planets = {
    planets: [],
    Loading: false,
    error: ""
}



// get the people Array

export const getPlanets = createAsyncThunk<
 PlanetState[],
 void,
 { rejectValue: string }

>(
    "planet/getPlanets",
    async (args, { rejectWithValue}) => {

        try {
            const res = await PlanetApi.getAll();   
            if(res.status === 200 || res.status === 201) {
                return res.data.results;
          }
        } catch(error) {
             // error handling. 
             
             if(error) {
                rejectWithValue('failed to fetch')
              }
        }
    })

     


  // get the planet Object using unique ids

export const getWithId = createAsyncThunk<
PlanetState,
string,
{ rejectValue: string }

>(
   "planet/getPlanets/:id",
   async (id, { rejectWithValue}) => {

    try {
        const res = await PlanetApi.getWithId(id);   
        if(res.status === 200 || res.status === 201) {
            return res.data;
      }
    } catch(error) {
         // error handling. 
         
         if(error) {
            rejectWithValue('failed to fetch')
          }
    }
     
   }  
 )
