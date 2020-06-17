import React from 'react';

import FormInput from '../form-input/form-imput.component';

import {auth,createUserProfleDocument} from '../../firebase/firebase.utills';


import './sign-up.style.scss';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {

    constructor(){
        super();

        this.state = {

            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }

    }

    handleSubmit= async event => {

        event.preventDefault();

        const {displayName,email,password,confirmPassword}=this.state;

        if(password !== confirmPassword){

            alert("Pssword does not match");

            return ;
        }

        try {
   
            const {user} = await auth.createUserWithEmailAndPassword(
                 email,
                 password
                 )

                
            
         await createUserProfleDocument(user,{displayName})


         this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
         });

        } catch (error) {
            
            console.log(error);


        }


    };

    handleChange=event=>{

        const{name,value}=event.target;

        this.setState({[name]:value})
    };

    render(){

        const {displayName,email,password,confirmPassword}=this.state;
        return(
            <div className='sign-up'>
            <h2>I dont have an account</h2>
            <span>Sign up with your email and password</span>
            
            <form className='sign-up-form'>
           
            

            <FormInput
            type='text'
            name='displayName'
            value={displayName}
            label='displayName'
            onChange={this.handleChange}
            required/>

            <FormInput
            type='text'
            name='email'
            value={email}
            label='Email'
            onChange={this.handleChange}
            required/>

            <FormInput
            type='password'
            label='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            required/>

            <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='Confirm Password'
            onChange={this.handleChange}
            required/>
            </form>

            <CustomButton type='submit'  onClick={this.handleSubmit}>Signup</CustomButton>
            </div>
        )

    }
}


export default SignUp;