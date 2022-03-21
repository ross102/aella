import React, { useEffect } from 'react';
import { getPlanets, Planetid } from "../Features";
import { RootState } from "../AppState/store";
import { useDispatch, useSelector } from 'react-redux';
import * as _Card from '../Component/sharedComponents/cards.styles';
import {PlanetCard} from '../Component/sharedComponents/Cards';
import Header from '../Component/sharedComponents/Header';
import { useParams } from 'react-router-dom';
import { Planets } from '../Component/sharedComponents/Details';
import Globalstyles from '../App.styles'



// interface
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



// two components are exported from this page

export const PlanetPage = () => {
 const dispatch = useDispatch()
 const { planets, Loading, error } = useSelector((state: RootState) => state.Planets)

 
 useEffect(()=> {
     dispatch(getPlanets());

 }, [dispatch])


  return (
    
    <_Card.Section>
    <_Card.Title >Planets </_Card.Title>
    <_Card.Container>
    {  Loading && <h2>fetching...</h2>}

      {planets.map((el: PlanetState) => {
        return  <PlanetCard 
           key={el.url} 
           name={el.name}
           created={el.created} 
           url={el.url}  
           
                />
      })}
      
    </_Card.Container>
    </_Card.Section>
    
  )
}

// using id

export default function PlanetDetails (props: any)  {
    const dispatch = useDispatch()
    const { planets, Loading, error } = useSelector((state: RootState) => state.Planets)
    const  {id } = useParams();
    
    useEffect(()=> {
      if(id) {
        dispatch(Planetid(id))
      }
       
    }, [id])
   
   
   
   
     return (
       <React.Fragment>
         <Globalstyles />
       <Header>
       <_Card.Section>
       <_Card.Container>
           
           {  Loading && <h2>Loading...please wait</h2>}
           
            <Planets  planets={planets[0]} /> 
                    
        
       </_Card.Container>
       </_Card.Section>
       </Header>
       </React.Fragment>
     )
   }
  