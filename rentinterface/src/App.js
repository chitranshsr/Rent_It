import React from 'react';
import './App.css';
import  Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Carousel from './components/Carousel';


import './components/Style.css';
import {BrowserRouter, Route , Routes} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
     <Routes>
    <Route path="/home" element={
      <>
      <Navbar />
      <Carousel/>
   
      </>
    }>
     
    </Route>
    <Route path="/signin" element={
 <SignIn/>
    }>
     
    </Route>
    <Route path="/signup" element={
       <SignUp/>
    }>
      
    </Route>
  </Routes>
    </BrowserRouter>
  );
}

export default App;
