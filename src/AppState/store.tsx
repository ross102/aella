import { configureStore, Store } from "@reduxjs/toolkit";
import FilmSlice from "../Features/Films/FilmSlice";
import PeopleSlice from "../Features/People/PeopleSlice";
import PlanetSlice from "../Features/Planets/PlanetSlice";
import StarshipSlice from "../Features/starships/StarshipSlice";

export const store = configureStore({

  reducer: {
    Films: FilmSlice,
    People: PeopleSlice,
    Planets: PlanetSlice,
    Starships: StarshipSlice

  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 