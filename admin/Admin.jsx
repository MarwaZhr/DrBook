import React from 'react';
import axios from 'axios';
// I know it shouldn't be like this but no cell no time 
class Admin extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      author: '',
      description: '',
      price: '',
      image: '',
      quantitie: '',
      genre: '',

    };
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value} );
  }
  upDateStore () {
    let newBook = {
      title: this.state.title, 
      author: this.state.author, 
      description: this.state.description,
      price: Number(this.state.price), 
      image: this.state.image, 
      genre: this.state.genre,
      quantitie: Number(this.state.quantitie)};
    axios.post('/AdminSide', {book: newBook}).then((result)=> { console.log(result); });
  }
  handleSubmit() {
    this.upDateStore();
  }

  render() {
    return (
      <div>
        <div className="row mx-auto mt-4"> <div className="text-center text-uppercase">Book To Add Dr Book</div></div>
        <div className="row mx-auto mt-3"> <div className="text-center text-uppercase">Title</div></div>
        <input className="row mx-auto mt-2" placeholder='Book Title' name='title' onChange={this.handleChange.bind(this)}/>
        <div className="row mx-auto mt-3"> <div className="text-center text-uppercase">Author</div></div>
        <input className="row mx-auto" placeholder='Author' name='author' onChange={this.handleChange.bind(this)} />
        <div className="row mx-auto mt-3"> <div className="text-center text-uppercase">description </div></div>
        <input className="row mx-auto" placeholder='Description' name='description' onChange={this.handleChange.bind(this)}/>
        <div className="row mx-auto mt-3"> <div className="text-center text-uppercase">price</div></div>
        <input className="row mx-auto" placeholder='Price' name='price' onChange={this.handleChange.bind(this)}/>
        <div className="row mx-auto mt-2"> <div className="text-center text-uppercase">image</div></div>
        <input className="row mx-auto" placeholder='Image' name='image' onChange={this.handleChange.bind(this)}/>
        <div className="row mx-auto mt-3"> <div className="text-center text-uppercase">quantitie</div></div>
        <input className="row mx-auto" placeholder='Quantite' name='quantities'onChange={this.handleChange.bind(this)}/>
        <div className="row mx-auto mt-2"> <div className="text-center text-uppercase">genre</div></div>
        <input className="row mx-auto" placeholder='Genres' name='genre'onChange={this.handleChange.bind(this)} />
        <div className ='col-md-12 text-center'>
          <button className=" mx-auto mt-3 btn btn-outline-danger ml-4" onClick= {this.handleSubmit.bind(this)}> Add to the store</button>
        </div>
      </div>
    );
  }

}

export default Admin;