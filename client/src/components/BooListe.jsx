import React from 'react';
import Title from './BookListeChilds/Title.jsx';
import AffichBook from './BookListeChilds/AfficheBook.jsx';
import BookDetails from './BookDetails.jsx';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../StoreData.js';

class BookListe extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <div className="row">
              <Title />
            </div>
            <div className="row">
              <ProductConsumer>
                {
                  (value)=> {
                    return (
                      <AffichBook book={value.books} updateinCartValueWhenClicke={value.addToCart} bookDetails={value.handelDetails} />
                    );
                  }
                }
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BookListe;