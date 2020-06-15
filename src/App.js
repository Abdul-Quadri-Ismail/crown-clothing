import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSigUpPage from './pages/sign-in-and-signout/sign-in-and-signout';
import {auth,createUserProfleDocument} from './firebase/firebase.utills';

 

const Error = props =>{
  console.log(props) 
return(
  <div>
  <h1>404</h1>
  </div>
);
  
};

class App extends React.Component {
  constructor(){
    super();

    this.state={
      currentUser:null
    }
  }
  unsubcribrFromAuth=null;

  componentDidMount(){
    this.unsubcribrFromAuth=auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){

        const userRef= await  createUserProfleDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });

        })

      }

      this.setState({currentUser:userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubcribrFromAuth();
  }
   render() {
return (
    <div >
    <Header currentUser={this.state.currentUser}/>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/shop' component={ ShopPage }/>
    <Route exact path='/signin' component={SignInAndSigUpPage}/>
    <Route exact component={ Error } />
    </Switch>

    </div>
  );
    }
  }
  


export default App;
