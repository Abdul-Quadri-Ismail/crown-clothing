import React from 'react';
import  {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selector'

import  StripeCheckoutButton  from "../../components/stripe-button/stripe-button.component";

import CheckoutItem from '../../components/checkout-item/checkout-Item.components'
import './checkout.style.scss';

const CheckOutPage = ({cartItems,total}) => (

    <div className='checkout-page'>
    <div className='checkout-header'>

    <div  className='header-block'>
    <span>Product </span>
    </div>
    <div  className='header-block'>
    <span>Description</span>
    </div>
    <div  className='header-block'>
    <span>Quantity</span>
    </div>
    <div  className='header-block'>
    <span>Price </span>
    </div>
    <div  className='header-block'>
    <span>Remove</span>
    </div>
    
    </div>

    {
        cartItems.map(cartItem=>  (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            
        ))
    }

     
    <div className='total'> TOTAL : ${total}  </div>
    
    <div className='test '>
    Plsease use the following test credit card for payment 
    <br/>
     4242424242424242 52/52 898
    </div>

    <StripeCheckoutButton price={total}/>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);