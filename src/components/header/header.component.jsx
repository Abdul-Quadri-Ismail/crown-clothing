import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assest/logo.svg';
import './header.style.scss';


const Header=()=>(

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
    
    </div>
    </div>
);

export default Header;