import React from 'react';
import './App.css';
import HomePage from './pages/hompage/homepage.component';
import {Route,Switch} from 'react-router-dom';


const HatsPage = props =>{
  console.log(props)
return(
  <div>
  <h1>HATS PAGE</h1>
  </div>
);
  
};

const Error = props =>{
  console.log(props)
return(
  <div>
  <h1>404</h1>
  </div>
);
  
};

function App() { 
  return (
    <div >
    <Switch>

    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop/hats' component={HatsPage}/>
    <Route exact component={ Error } />
    </Switch>

    </div>
  );
}

export default App;
