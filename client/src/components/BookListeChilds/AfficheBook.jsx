import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {BookWrapper} from '../StyleCSS.jsx';
import {ProductConsumer} from '../../StoreData';


const AffichBook = (props) => {
  return (
    <div className="row">
      {props.book.map((book, index) => {
        return (
          <BookWrapper key={index} className= "col-9 mx-auto col-md-6 col-lg-3 my-3">
            <div className="card">
              <div className="img-container p-5" onClick={()=>{ props.updateinCartValueWhenClicke(book); }}>
                <Link to="/details">
                  <img src={book.image} className="card-img-top" onClick= {()=> { props.bookDetails(book); }}/>
                </Link>
                <button className="cart-btn" disabled={book.inCart ? true : false} onClick={console.log('hi')}> <i className="fas fa-cart-arrow-down fa-2x"></i></button>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <p className="align-self-center mb-0"> Genre: {book.genre}</p>  
                <h5 className="text-blue font-italic mb-0">
                  <span className=" mr-1">$</span>
                  {book.price}
                </h5>
              </div>
            </div>
          </BookWrapper>   
        );
      })}
    </div>
  );
    
};

export default AffichBook;

