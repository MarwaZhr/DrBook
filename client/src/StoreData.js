import React from 'react';
import axios from 'axios';

const ProductContext = React.createContext();

class ProductProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listeBooks: [],
      book: {},
      cart: {data: []},
    };
  }
    
  componentDidMount() {
    this.getBooksFromDataBase();
    this.getBooksAddedToCart();
  }
  //render books in the store
  getBooksFromDataBase () {
    axios.get('/getBooks').then((result) => {
      console.log(result.data);
      this.setState({listeBooks: result.data});
    });
  }
  //get the info for one book
  getOnBookInfo (book) {
    axios.get(`/bookInfo${book.id}`).then((result) => {
      console.log(result.data);
      this.setState({book: result.data[0]});
    });
  }
  //update true or false cart
  updateinCartValueWhenClicke (book) {
    axios.patch(`/updateCart${book.id}`).then((result) => {
      console.log('DataBase Updated');
    });
    this.getBooksAddedToCart();
  }
  handelDetails(book) {
    console.log('handledet');
    this.getOnBookInfo(book);
  }
  //add an item to the cart
  addToCart (book) {
    console.log('add to cart');
    this.updateinCartValueWhenClicke(book);
  }
  //get the element added to the cart
  getBooksAddedToCart() {
    axios.get('/added').then((result) => {
      this.setState({cart: result});
    });
  }
  //Remove all the books from the cart
  clearCart(bookInThCart) {
    bookInThCart.map((book)=> {
      this.updateinCartValueWhenClicke(book);
    });
  }
  //Remove only one book from the cart
  removeBookFromCart(item) {
    this.updateinCartValueWhenClicke(item);
  }
  
  render() {
    return (
      <ProductContext.Provider value={{
        books: this.state.listeBooks, 
        handelDetails: this.handelDetails.bind(this), 
        addToCart: this.addToCart.bind(this), 
        book: this.state.book,
        cart: this.state.cart,
        clearCart: this.clearCart.bind(this),
        removeBookFromCart: this.removeBookFromCart.bind(this)
      }}>
        {this.props.children}
      </ProductContext.Provider>
    
    );
  }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};
