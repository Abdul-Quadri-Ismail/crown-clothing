  
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

import { HeaderContainer,OptionLink,OptionsContainer,LogoContainer, } from "./header.style";

import './header.style.scss';

const Header = ({ currentUser,hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to=''>
        CONTACT
      </OptionLink>
      { currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
        SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}

      <CartIcon />
    </OptionsContainer>

    {
      hidden ? null:    <CartDropDown />
    }
    
  </HeaderContainer>
);

const mapStateToProps =  createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCardHidden
})

export default connect(mapStateToProps)(Header);