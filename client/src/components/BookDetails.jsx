import React from 'react';
import {ProductConsumer} from '../StoreData.js';
import {Link} from 'react-router-dom';
import {ButtonContainer2} from './StyleCSS.jsx';

const BookDetails = (props) => {
  return (
    <ProductConsumer>
      {
        (value) => {
          let book = value.book;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{book.title}</h1>
                </div>
              </div>
              <div className="row" >
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={book.image} className="img-fluid" />
                </div>
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>Author : {value.book.author}</h1>
                  <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                    Genre : {book.genre}
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      Price : <span>$</span>{book.price}
                    </strong>
                  </h4>
                  <h3 className="text-capitalize font-weight-bold mt-3 mb-0">
                    Description :
                  </h3>
                  <p className="text-muted lead"> {book.description}</p>
                  <div>
                    <Link to='/'>
                      <ButtonContainer2>
                        Back to Store
                      </ButtonContainer2>
                    </Link>
                    <ButtonContainer2 disabled={book.inCart ? true : false} onClick={()=>{ value.addToCart(value.book); }}>
                      {book.inCart ? 'inCart' : 'add To cart'}
                    </ButtonContainer2>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }
    </ProductConsumer>
  
  );

};

export default BookDetails;