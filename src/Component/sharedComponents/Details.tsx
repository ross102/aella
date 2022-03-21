import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import * as _Detail from './details.styles';



// three(3) components resource type are exported from this page



export const People = (props: any) => {

    const [id, setId] = useState(''); 

    useEffect(()=> {
        // no id key in the resource. but ids are present in the url key
        // getting the id
           let url = props.people.films[0]
         let newId: number = url.length - 2
         setId(url[newId])

    }, [])


    return (
        <_Detail.Details>
          <_Detail.Title>{props.people.name}</_Detail.Title>
          <_Detail.ul>
              <_Detail.li>
                  Height: {props.people.height}
              </_Detail.li>
              <_Detail.li>
                 Mass: {props.people.mass}
              </_Detail.li>
              <_Detail.li>
                 Hair: {props.people.hair_color}
              </_Detail.li>
              <_Detail.li>
                 Color: {props.people.skin_color}
              </_Detail.li>
              <_Detail.li>
                  Birth year: { props.people.birth_year}
              </_Detail.li>
              <_Detail.li>
                Gender:  { props.people.gender}
              </_Detail.li>
              <_Detail.li>
                  
                Films  { props.people.films && <Link to={`/planets/${id}`}>planets</Link>}
              </_Detail.li>
              {/* <_Detail.li>
              Starships: {props.people.starships && ` films: ${props.people.starships[0]}`}
              </_Detail.li> */}
          </_Detail.ul>
        </_Detail.Details>

    )
           
}


export const Planets = (props:any) => {

    const [id, setId] = useState(''); 

    useEffect(()=> {
        // no id key in the resource. but ids are present in the url key
        // getting the id

        let url = props.planets.films[0]
        let newId: number = url.length - 2
        setId(url[newId])

    }, [])


    return (
        <_Detail.Details>
          <_Detail.Title>{props.planets.name}</_Detail.Title>
          <_Detail.ul>
              <_Detail.li>
              rotation_period:  {props.planets.rotation_period}
              </_Detail.li>
              <_Detail.li>
              orbital_period: {props.planets.orbital_period}
              </_Detail.li>
              <_Detail.li>
              diameter:  {props.planets.diameter}
              </_Detail.li>
              <_Detail.li>
              climate:   {props.planets.climate}
              </_Detail.li>
              <_Detail.li>
              gravity:   {props.planets.gravity}
              </_Detail.li>
              <_Detail.li>
              films:     {props.planets.films && <Link to={`/starships/${id}`}>starships</Link>}
              </_Detail.li>
              </_Detail.ul>
        </_Detail.Details>
)
           
}


export const Stars = (props:any) => {

    const [id, setId] = useState(''); 

    useEffect(()=> {
        // no id key in the resource. but ids are present in the url key
        // getting the id

        let url = props.starships.films[0]
        let newId: number = url.length - 2
        setId(url[newId])

    }, [])


    return (
        <_Detail.Details>
          <_Detail.Title>{props.starships.name}</_Detail.Title>
          <_Detail.ul>
              <_Detail.li>
                 Model: {props.starships.model}
              </_Detail.li>
              <_Detail.li>
                 Manufacturer: {props.starships.manufacturer}
              </_Detail.li>
              <_Detail.li>
                Crew:  {props.starships.crew}
              </_Detail.li>
              <_Detail.li>     
                 <Link to={`/people/${id}`}>People</Link>
              </_Detail.li>
              <_Detail.li>
              starship_class: {props.starships.starship_class}
              </_Detail.li>
          </_Detail.ul>
        </_Detail.Details>

    )
        
}