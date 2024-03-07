import React from 'react';
import Navbar from '../Components/Navbar';
import Login from './Login/Login';
import Signup from './Signup/SignUp';
import About from './Accueil/about/About';
import Contact from './Accueil/Contact/Contact';
import Intro from './Accueil/intro/Intro';
import Footer from './Accueil/Footer';
//import Footer from './Accueil/Footer';

const Home = () => {
    return (
      <div>
     {/*<Login/>
       <Signup/>*/}
      <Intro/>  
      <About />
      <Contact />
      <Footer/>
     

      </div>
    )
  }

export default Home;
