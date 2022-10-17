import React from 'react';
import "./Cart.css"

const Cart = (props) => {
    const{cart, clearCart, children} = props
    console.log('cart', cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price * product.quantity
        shipping = shipping + product.shipping
    }

    const tax = parseFloat((total * 0.10).toFixed(2));

    const grandTotal = (total + shipping + tax).toFixed(2)

    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal}</h5>
            {/* <button onClick={clearCart}>Clear All</button> */}
            <br />
            {children}
        </div>
    );
};

export default Cart;