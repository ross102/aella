import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import * as _Card from './cards.styles';


export const Card =  (props: any) => {
   const [id, setId] = useState(''); 

    useEffect(()=> {
        // no id key in the resource. but ids are present in the url key
        // getting the id

         let newId: number = props.url.length - 2
         setId(props.url[newId])

    }, [])

  return (
       <_Card.Card>
            <h2>{ props.name} </h2>
            <p>{props.created.slice(0,10)}</p>
          <_Card.link><Link to={`/people/${id}`}>Read more </Link></_Card.link>
          
        </_Card.Card>          
       )
}

export const PlanetCard =  (props: any) => {
    
    const [id, setId] = useState('')
        
    useEffect(()=> {
       

         let newId: number = props.url.length - 2
         setId(props.url[newId])

    }, [])


    return (
         <_Card.planetCard>
              <h2>{ props.name} </h2>
              <p>{props.created.slice(0,10)}</p>
            <_Card.link><Link to={`/planets/${id}`}>Read more </Link></_Card.link>
          </_Card.planetCard>          
         )
  }
  
  export const StarCard =  (props: any) => {
    const [id, setId] = useState('')
        
    useEffect(()=> {
        
         let newId: number = props.url.length - 2
         setId(props.url[newId])

    }, [])


    return (
         <_Card.starCard>
              <h2>{ props.name} </h2>
              <p>{props.created.slice(0,10)}</p>
            <_Card.link><Link to={`/starships/${id}`}>Read more </Link></_Card.link>
          </_Card.starCard>          
         )
  }
