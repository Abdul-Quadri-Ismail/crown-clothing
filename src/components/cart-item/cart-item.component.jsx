import React from 'react';

import './cart-item.style.scss';

const CartItem =({ item: { imageUrl,price,name,quantity}})=>(
    <div className='cart-item'>
    <img src={imageUrl} alt='item'/>
    <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>{quantity}*{price}</span>
    </div>

    </div>
)

// id: 4
// imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png"
// name: "Grey Brim"
// price: 25
// quantity: 1

// const CartItem =(item)=>{
//     console.log(item);
//     const {imageUrl,price,name,quantity}=item;
//         console.log(imageUrl);

//     return(
//         <div className='cart-item'>
//     <img src="" alt='item'/>
//     <div className='item-details'>
//     <span className='name'></span>
//     <span className='price'></span>
//     </div>

//     </div>
//     )
    
// }


export default CartItem;