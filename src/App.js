import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';


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
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ShopPage}/>
    <Route exact component={ Error } />
    </Switch>

    </div>
  );
}

export default App;
