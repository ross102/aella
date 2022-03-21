import styled from "styled-components";
import {screen} from "../screenSize/screen"

interface ActiveClass {
    status: string
}




/* === Navbar div  ====== */ 

export const nav = styled.div`
 background-color: blueviolet;
 display: flex;
 justify-content: space-around;
 align-items: center;
 font-size: 2rem;
 padding: 3rem 2rem;
 

 @media screen and (max-width: ${screen.small}){
    flex-direction: column;
    width: 100%;

    
}


`

/* === Logo div ====== */ 

export const logo = styled.div`
 padding: 2rem 3rem;
 height: 70px;
 width:  70px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: #65A5F2;
 color: white;
 border-radius: 50%;

 @media screen and (max-width: ${screen.small}){
    position: absolute;
    left: 2rem;
    top: 1rem
}


`
/* === Span  ====== */ 
export const span = styled.span`
color: darkblue;
` 

/* === Unordered List  ====== */ 

export  const ulElement = styled.ul`
list-style-type: none;

@media screen and (max-width: ${screen.small}){
    text-align: center;
    padding-top: 3rem;
   
  
}

`
/* === List tags  ====== */ 
export const navItem  = styled.li`
 display: inline-block;
 padding: 2rem 1rem;

  
 & :hover {
     color: burlywood;   
    }

 @media screen and (max-width: ${screen.small}){
    display: ${(props: ActiveClass) => props.status === "active" ? "block" : "none"}
    
}

`
/* === Anchor tags + ====== */ 
export  const  links = styled.a`
 text-decoration: none;
 color: white;
 font-weight: 400;
 cursor: pointer;

 & hover {
  color: lightblue;
 }

`

/* === Menu icon + ====== */ 

export const menu = styled.div`

font-size: 5rem;
height: 70px;
width: 70px;
padding: 1rem;
color: white;
cursor: pointer;
margin: 2rem;
display: none;


@media screen and (max-width: ${screen.small}){
    display: block;
    position: absolute;
    right: 1rem;
    top: 0;
    padding: 0.4rem;
    height: 50px;
    margin: 0.3rem;
}

`


