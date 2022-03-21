import React from "react";


import Navbar from "./Navbar";


interface P {
    children: React.ReactChildren | React.ReactChild 
}

export default function Header(props: P ) {
  return (
     <React.Fragment>
         <Navbar />
         {props.children}
     </React.Fragment>
  )
}
