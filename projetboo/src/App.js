import React from 'react';
import  { Fragment } from 'react';
//import logo from './logo.svg';
import  Navbars from './components/nav/navbar';
//import { logo } from 'react-bootstrap';
import Footer from './components/Foot/Footer'
import Home from './pages/Home';
import './App.css';


function App() {
  return (
    <Fragment>
      <Navbars/>
      <Home/>
      <Footer/>
    </Fragment> 
     
  );
}

export default App;

