import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assest/logo.svg';
import './header.style.scss';
import {auth} from '../../firebase/firebase.utills';



const Header=({currentUser})=>(

    <div className='header'>
    <Link className='logo-container' to="/">
    
    <Logo className='logo'/>
    </Link>

    <div className='options'>
    <Link className='options' to='/shop'>
    SHOP
    </Link>
    <Link className='options' to='/shop'>
    Contact
    </Link>
    {currentUser?
    <div className="option" onClick={()=>auth.signOut()}>SIGN OUT</div>
    :

    <Link className='option' to='/signin'>
    SIGN IN
    </Link>
    }
    </div>
    </div>
);

export default Header;