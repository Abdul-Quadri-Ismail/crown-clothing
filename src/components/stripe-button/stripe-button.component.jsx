import React from 'react';

import  StripeCheckout  from "react-stripe-checkout";

const StripeCheckoutButton= ({ price }) =>{

    const priceForStripe=price*100;
    const publishablekey='pk_test_51Gyf5VFNAzbOx6MYOdEAz5z4iUG92BdDuWugVpD2Z3fnrEAk0oYcw4Dd4IcjbC9rnt3kYitkS5ECIGPoiPvk85KV00cOvHtnAr';

    const onToken = token =>{
        console.log(token)
        alert('Payment successful')
    }

    return(
        
        <StripeCheckout
        label="Pay Now"
        name="Crwn clothing Ltd"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken} 
        stripeKey={publishablekey}
        />
           )
}

export default StripeCheckoutButton;