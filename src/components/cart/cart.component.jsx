import React from 'react';

import {ReactComponent as IconCart} from '../../assest/cart.svg'

import { connect } from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart.style.scss'

const CartIcon = ({ toggleCartHidden }) =>(

    <div className='cart-icon' onClick={toggleCartHidden}>
 
    <IconCart className='shopping-icon'/>

    <span className='item-count'>0</span>

    </div>

);

const mapDispatchToProps = dispatch =>({

    toggleCartHidden: () =>dispatch(toggleCartHidden())

});

const mapStateToProps = ({cart : {cartItems}}) =>({
    itemCount:cartItems.reduce(
        (accumalatedQuantity,cartItems) => accumalatedQuantity + cartItems.quantity,0)
})

export default connect(null,mapDispatchToProps)(CartIcon);

