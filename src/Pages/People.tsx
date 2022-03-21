import React, { useEffect, useState } from 'react';
import {getPeople, PeopleId } from "../Features";
import { RootState } from "../AppState/store";
import { useDispatch, useSelector } from 'react-redux';
import * as _Card from '../Component/sharedComponents/cards.styles';
import {Card} from '../Component/sharedComponents/Cards';
import Header from '../Component/sharedComponents/Header';
import { useParams } from 'react-router-dom';
import { People } from '../Component/sharedComponents/Details';
import Globalstyles from '../App.styles'



// interface
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


// Two components are exported from this page
// People component returns an array
// PersonDetails component returns an Object


export const PeoplePage = () => {

 const dispatch = useDispatch()
 const { people, Loading, error } = useSelector((state: RootState) => state.People)
 
 
 useEffect(()=> {
     dispatch(getPeople());
     console.log(people);
 }, [dispatch])


  return (
    <Header>
    <_Card.Section>
    <_Card.Title>People </_Card.Title>
    <_Card.Container>
        
        {  Loading && <h2>Loading...please wait</h2>}

      {people.map((el: PeopleState) => {       
                   
        return    <Card 
           key={el.url} 
           name={el.name}
           created={el.created} 
           url={el.url} 
           id      
           
           />
      })}
      
    </_Card.Container>
    </_Card.Section>
    </Header>
  )
}


// Person Details

export default function PeopleDetails (props: any)  {
  const dispatch = useDispatch()
  const { people, Loading, error } = useSelector((state: RootState) => state.People)
  const  {id } = useParams();
  
  useEffect(()=> {
    if(id) {
      dispatch(PeopleId(id))
    }
     
  }, [id])
 
 
 
 
   return (
     <React.Fragment>
       <Globalstyles />
     <Header>
     <_Card.Section>
     <_Card.Container>
         
         {  Loading && <h2>Loading...please wait</h2>}
         
          <People  people={people[0]} /> 
                  
      
     </_Card.Container>
     </_Card.Section>
     </Header>
     </React.Fragment>
   )
 }
 