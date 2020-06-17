import React from 'react';
import './App.css';

import {connect} from 'react-redux';

import Header from './components/header/header.component';
import HomePage from './pages/hompage/homepage.component';
import {Route,Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSigUpPage from './pages/sign-in-and-signout/sign-in-and-signout';
import {auth,createUserProfleDocument} from './firebase/firebase.utills';

 import {setCurrentUser} from './redux/user/user.action';


const Error = props =>{
  console.log(props) 
return(
  <div>
  <h1>404</h1>
  </div>
);
  
};

class App extends React.Component {
 
  
  unsubcribrFromAuth=null;

  componentDidMount(){
    
    const {setCurrentUser} = this.props;

    this.unsubcribrFromAuth=auth.onAuthStateChanged(async userAuth=>{

      if(userAuth){

        const userRef= await  createUserProfleDocument(userAuth);

        userRef.onSnapshot(snapShot =>{
          this.props.setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
          })
       

        })

      }

      setCurrentUser({userAuth});
    })
  }

  componentWillUnmount(){
    this.unsubcribrFromAuth();
  }
   render() {
return (
    <div >
    <Header/>
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
  

const mapDispatchToProps= dispatch=>({

setCurrentUser:user => dispatch(setCurrentUser(user))

})
export default connect(null,mapDispatchToProps)(App);
