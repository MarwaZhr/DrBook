import React from 'react';
import {ProductConsumer} from '../StoreData.js';
import CartContainer from './CartContainer.jsx';
import EmptyCart from './EmpTyCart.jsx';
import '../index.css';
import CartTotal from './CartTotal.jsx';
const Cart = () => {
  return (
    <section>
      <div className="row">
        <div className=" col-10 mx-auto my-2 text-md-left"></div>
        <h1 className="text-capitalize font-weight-bold">
        </h1>
      </div>
      <ProductConsumer>
        {value => {
          console.log(value);
          if (value.cart.data.length > 0) {
            return (
              <React.Fragment>
                <CartContainer />
                <div className="container-fluid">
                  {value.cart.data.map((item, index)=> {
                    return (
                      <div key={index}className="row my-1 text-capitalize text-center">
                        <div className="col-10 mx-auto col-lg-2">
                          <img src={item.image} style={{width: '5rem', height: '5rem'}} className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-lg-2"> 
                          <span className="d-lg-none">product : </span> {item.title}
                        </div>
                        <div className="col-10 mx-auto col-lg-2"> 
                          <span className="d-lg-none">price : </span> {item.price}
                        </div>
                        {/* <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                          <div className="d-flex justify-content-center">
                            <div>
                              <span className="btn btn-black mx-1" onClick={()=>{ value.updatePurchacedecr(item.id); }}>-</span>
                              <span className="btn btn-black mx-1">{item.purchase}</span>
                              <span className="btn btn-black mx-1" onClick={()=>{ value.updatePurchaceinc(item.id); }}>+</span>
                            </div>
                          </div>
                        </div> */}
                        <div className="col-10 mx-auto col-lg-2"> 
                          <div className="cart-icon" onClick={()=> { value.removeBookFromCart(item); }}>
                            <i className="fas fa-trash"></i>
                          </div>
                        </div>
                        {/* <div className="col-10 mx-auto col-lg-2"> 
                          <strong>item total : $ {item.total} </strong> 
                        </div> */}
                      </div>
                    );
                  })}
                </div>
                <CartTotal value={value} />
              </React.Fragment>
            );
          } else {
            return <EmptyCart />;
          }
        }}
      </ProductConsumer>
      
    </section>

  );
};

export default Cart;