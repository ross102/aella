import { createAsyncThunk } from "@reduxjs/toolkit";
import  FilmsApi from '../../Resource/FilmsApi';



interface FilmsState  {
     title: string,
     episode_id: number,
     opening_crawl: string,
     director: string,
     producer: string,
     release_date: string,
     characters: string[],
     planets: string[],
     starships: string[],
     vehicles: string[],
     species: string[],
     created: string,
     edited: string,
     url: string
}

//films interface
interface Films {
    films: FilmsState[] 
    Loading: boolean;
    error: string
}




export const initialState : Films = {
    films: [],
    Loading: false,
    error: ""
}





  // get the nested films Object using unique ids

export const getWithId = createAsyncThunk<
FilmsState,
string,
{ rejectValue: string }

>(
   "films/getfilms/:id",
   async (id, { rejectWithValue}) => {

    try {
        const res = await FilmsApi.getWithId(id);   
        if(res.status === 200 || res.status === 201) {
            return res.data;
      }
    } catch(error) {
         // error handling. 
         // we can also give unique responses with the status codes but this will pass
         if(error) {
            rejectWithValue('failed to fetch')
          }
    }
     
   }  
 )
