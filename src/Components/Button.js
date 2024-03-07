import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const Button = () =>{
  return (
    <Link to='Signup'>
      <button className='btn'>S'inscrire</button>
    </Link>
  );
  
}
export default Button ; 