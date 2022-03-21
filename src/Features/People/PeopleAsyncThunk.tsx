import { createAsyncThunk } from "@reduxjs/toolkit";
import PeopleApi from '../../Resource/PeopleApi'



interface PeopleState  {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

//People interface
interface People {
    people: PeopleState[] 
    Loading: boolean;
    error: string
}



export const initialState : People = {
    people: [],
    Loading: false,
    error: ""
}



// get the people Array

export const getPeople = createAsyncThunk<
 PeopleState[],
 void,
 { rejectValue: string }

>(
    "people/getPeople",
    async (args, { rejectWithValue}) => {

        try {
            const res = await PeopleApi.getAll();   
            if(res.status === 200 || res.status === 201) {
                return res.data.results;
          }
        } catch(error) {
             // error handling. 
             // we can also give unique responses with the status codes but this will pass
             if(error) {
                rejectWithValue('failed to fetch')
              }
        }
    })

     


  // get the person Object using unique ids

export const getWithId = createAsyncThunk<
PeopleState,
string ,
{ rejectValue: string }

>(
   "people/getPeople/:id",
   async (id, { rejectWithValue}) => {

    try {
        const res = await PeopleApi.getWithId(id);   
        if(res.status === 200 || res.status === 201) {
            return res.data;
      }
    } catch(error) {
         // error handling. 
         // we can also give unique responses with the status codes but this will pass
         if(error) {
           return rejectWithValue('failed to fetch')
          }
    }
     
   }  
 )
