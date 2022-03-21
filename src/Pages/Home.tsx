import React from 'react';
import { PeoplePage } from './People';
import { PlanetPage} from './Planet';
import {StarshipPage} from './Star';
import Globalstyles from '../App.styles'




function Home() {
  return (
    <React.Fragment>
    <Globalstyles />
      <PeoplePage />
      <PlanetPage />
      <StarshipPage />
      </React.Fragment>
      
    
  );
}

export default Home;
