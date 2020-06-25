  
import React from 'react';

import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utills.js';

import { ReactComponent as Logo } from '../../assest/logo.svg';

import  {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';

import CartIcon  from '../cart/cart.component';

import { selectCurrentUser } from '../../redux/user/user.selector'
import { selectCardHidden } from '../../redux/cart/cart.selector'

import CartDropDown  from '../cart-dropdown/cart-dropdown.component';



import './header.style.scss';

const Header = ({ currentUser,hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to=''>
        CONTACT
      </Link>
      { currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
        SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}

      <CartIcon />
    </div>

    {
      hidden ? null:    <CartDropDown />
    }
    
  </div>
);

const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCardHidden
})

export default connect(mapStateToProps)(Header);