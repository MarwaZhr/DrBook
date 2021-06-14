import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaveBare from './NavBare.jsx';
import BookDetails from './BookDetails.jsx';
import BookListe from './BooListe.jsx';
import Cart from './Cart.jsx';
import Defaults from './Default.jsx'; 
import Payment from './Payment.jsx';
import Admin from '../../../admin/Admin.jsx';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NaveBare />
        <Switch>
          <Route path='/' exact component={BookListe}></Route>
          <Route path='/details' component={BookDetails}></Route>
          <Route path='/cart' component={Cart}></Route>
          <Route path='/payment' component={Payment}></Route>
          <Route path='/admin' component= {Admin}></Route>
          <Route component={Defaults}></Route>
        </Switch>
      </React.Fragment>
    );
  }
}
