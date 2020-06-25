import React from 'react';

import {ReactComponent as IconCart} from '../../assest/cart.svg'

import { connect } from 'react-redux';

import { selectCartItemsCount } from '../../redux/cart/cart.selector.js';

import {toggleCartHidden} from '../../redux/cart/cart.action'

import './cart.style.scss'

const CartIcon = ({ toggleCartHidden,itemCount }) =>(

    <div className='cart-icon' onClick={toggleCartHidden}>
 
    <IconCart className='shopping-icon'/>

    <span className='item-count'>{ itemCount }</span>

    </div>

);

const mapDispatchToProps = dispatch =>({

    toggleCartHidden: () =>dispatch(toggleCartHidden())

});

const mapStateToProps = state =>({
    itemCount:selectCartItemsCount(state)
    })

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);

