import React, {useState, MouseEvent} from 'react'
import * as _Navbar from './Navbar.styles';


// _Navbar: Navbar styled components

export default function () {

  // active icon for menu bar
  const [active, setActive] = useState('');

  const  [iconStates, setIconStates] = useState(false)


  // Responsive menu icon for mobile screen
  //  can be tested using firefox browser

  const handleClick = (e: MouseEvent) => {
        
         setIconStates(!iconStates);
          
              if(iconStates)  {
               return setActive("active")

              } else {
                 setActive("notActive")
              } 
          
  }




  return (
        <_Navbar.nav>       
            <_Navbar.logo>              
              Sw<_Navbar.span>Api</_Navbar.span>
            </_Navbar.logo>
        
            <_Navbar.ulElement >
                
               <_Navbar.navItem status={active}>
                     <_Navbar.links href="/">
                        Home
                    </_Navbar.links>
                </_Navbar.navItem>

                <_Navbar.navItem status={active}>
                    <_Navbar.links href="/">
                        People  
                    </_Navbar.links>
                </_Navbar.navItem>

                <_Navbar.navItem status={active}>
                    <_Navbar.links href="#">
                        Planets
                    </_Navbar.links> 
                </_Navbar.navItem>
                
                <_Navbar.navItem status={active}> 
                    <_Navbar.links href="#">
                        Starships
                    </_Navbar.links>
                </_Navbar.navItem>

            </_Navbar.ulElement>
             <_Navbar.menu onClick={handleClick}>+</_Navbar.menu>
        </_Navbar.nav>

  )
}
