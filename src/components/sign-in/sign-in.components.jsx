import React from 'react';
import FormInput from '../form-input/form-imput.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.style.scss';

import {signInWithGoogle} from '../../firebase/firebase.utills';



class SignIn extends React.Component{

    constructor(props){
        super(props);

        this.state={

            email:'',
            password:''
        }
    }

    handleSubmit = event =>{
        event.preventDefault();

        this.setState({email:'',password:''})
    }

    handleChange= event =>{

        const{value,name}=event.target;
        event.preventDefault();

        this.setState({[name]:value})
    }

    render(){

        return (
            <div className="sign-in">
            
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
           
            <form onSubmit={this.handleSubmit}>


                    
 
            <FormInput 
            name="email" 
            type="email"
            label="email"
            onChange={this.handleChange}
             value={this.state.email}
            
            required/>
 
            <FormInput 
            label='password'
            name="password"
            onChange={this.handleChange}
             type="password" 
             value={this.state.password}
              required/>

            
              <CustomButton type="submit" 
              value="Submit Form">Sign In</CustomButton>
               <CustomButton
               onClick={signInWithGoogle}>Sign In with Google</CustomButton>
            </form>
            </div>
        )
    }
}
export default SignIn;