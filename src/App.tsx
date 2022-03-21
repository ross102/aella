import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/Home';
import  PeopleDetails  from './Pages/People';
import PlanetDetails from './Pages/Planet';
import StarDetails from './Pages/Star';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/people/:id" element={<PeopleDetails />} />
                <Route path="/planets/:id" element={<PlanetDetails />} />
                <Route path="/starships/:id" element={<StarDetails />} />
                
            </Routes>
        </BrowserRouter>
    );
};

export default App;




// import React from 'react';
// import People from './Pages/People';
// import Global from './App.styles';
// import Planet from './Pages/Planet';
// import Star from './Pages/Star';
// import { BrowserRouter as Router , Routes,   } from 'react-router-dom';


// export interface IApplicationProps {}


// const App: React.FunctionComponent<IApplicationProps> = (Router) => {
//   return (
    
//     <Router>
//      <Routes>

//      </Routes>
//     </Router>
    
//     // <React.Fragment>
//     // <Global />
//     // <Router>
//     //   <Switch>

//     //   </Switch>
//     // </Router>
//     //         </React.Fragment>
      
    
//   );
// }

// export default App;
