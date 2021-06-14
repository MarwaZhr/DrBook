import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';
import { Span, ButtonContainer } from './StyleCSS.jsx';


const NaveBare = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark bg-dark px-sm-5">
      <Link to='/'>
        <img src={logo} alt='logo' className='img-thumbnail' />
      </Link>
      <ul className="navbar-nav align-items-center"> 
        <li className="nav-item ml-5">
          <Link to='/' className="nav-link">
            <Span> Book'in </Span>
          </Link>
        </li>
      </ul>
      <Link to='/cart' className="ml-auto" >
        <ButtonContainer >
          <span className="mr-2"> 
            <i className="fas fa-cart-arrow-down fa-2x"></i>
          </span> 
           My Cart
        </ButtonContainer>
      </Link>
    </nav>
  
  );
};

export default NaveBare;


