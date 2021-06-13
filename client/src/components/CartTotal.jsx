import React from 'react';
import { Link } from 'react-router-dom';
import {ProductConsumer} from '../StoreData.js';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const CartTotal = (props)=> {
  const cart = props.value.cart.data;
  const clearCart = props.value.clearCart;
  let subtotal = 0;
  let tax = 0;
  let total = 0;
  cart.map((item) => {
    subtotal = subtotal + item.price;
    tax = tax + 2;
  });
  total = tax + subtotal;
  const handleToken = (token, total) => {
    axios.post('/checkout', {token, cart}).then((result)=> { console.log(result); });
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to='/'>
              <button className="btn btn-outline-danger text-uppercase mb-3 px-5" onClick={()=>clearCart(cart)}>
                clear cart
              </button>
            </Link>  
            <h5>
              <span className="text-title">
                  subtotal :
              </span> 
              <strong>
                  ${subtotal}
              </strong>
            </h5> 
            <h5>
              <span className="text-title">
                  tax :
              </span> 
              <strong>
                  ${tax}
              </strong>
            </h5>
            <h5>
              <span className="text-title">
                  total :
              </span> 
              <strong>
                  ${total}
              </strong>
            </h5>
            <StripeCheckout  
              stripeKey="pk_test_51J1vqqIjewuKal2UtGf8AihJr4TaRDefxP9u3kuYOjmBBhMiJwO1g6x5JDPL8SOQqgwC7xE6Da5IN8XAKtt5NCmE00U7DLx2v2" 
              token={handleToken}
              billingAddress
              shippingAddress
              amount={total * 100} 
            />
          </div>
        </div>      
      </div>
    </React.Fragment>
  );
};
export default CartTotal;