import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/Login/Login"
import Signup from './Pages/Signup/SignUp';
import Home from "./Pages/Home";

import { Toaster } from "react-hot-toast";


import { Button } from 'antd';
import Navbar from './Components/Navbar'
import Intro from './Pages/Accueil/intro/Intro';
import About from './Pages/Accueil/about/About';
import Contact from './Pages/Accueil/Contact/Contact';
import Footer  from './Pages/Accueil/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="/login" element={< Login />} />
        <Route path="/Signup" element={< Signup />} />

        <Route path='/Intro' element={<Intro />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Footer' element={<Footer />} />
        <Route path="*" element={<div>404 Not Found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

