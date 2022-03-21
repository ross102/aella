import React, { useEffect } from 'react';
import { getStarships, Starshipid } from "../Features";
import { RootState } from "../AppState/store";
import { useDispatch, useSelector } from 'react-redux';
import * as _Card from '../Component/sharedComponents/cards.styles';
import {StarCard} from '../Component/sharedComponents/Cards';
import { useParams } from 'react-router-dom';
import Header from '../Component/sharedComponents/Header';
import { Stars } from '../Component/sharedComponents/Details';
import Globalstyles from '../App.styles'


// interface
interface StarState  {
    
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





export const StarshipPage = () => {
 const dispatch = useDispatch()
 const { starships, Loading, error } = useSelector((state: RootState) => state.Starships)

 
 useEffect(()=> {
     dispatch(getStarships());

 }, [dispatch])


  return (
    
    <_Card.Section>
    <_Card.Title >Starships </_Card.Title>
    <_Card.Container>
    {  Loading && <h2>Loading...please wait</h2>}

      {starships.map((el: StarState) => {
        return  <StarCard 
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


export default function StarDetails (props: any)  {
    const dispatch = useDispatch()
    const { starships, Loading, error } = useSelector((state: RootState) => state.Starships)
    const  {id } = useParams();
    
    useEffect(()=> {
      if(id) {
        dispatch(Starshipid(id))
      }
       
    }, [id])
   
   
   
   
     return (
       <React.Fragment>
         <Globalstyles />
       <Header>
       <_Card.Section>
       <_Card.Container>
           
           {  Loading && <h2>Loading...please wait</h2>}
           
            <Stars  starships={starships[0]} /> 
                    
        
       </_Card.Container>
       </_Card.Section>
       </Header>
       </React.Fragment>
     )
   }
