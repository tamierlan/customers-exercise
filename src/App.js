import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Customers from './pages/Customers';
import SingleCustomer from './pages/SingleCustomer';
import Error from './pages/Error';

function App() {

  return (
    
      <BrowserRouter>
        <div className='App'>
          <Routes>


            <Route exact path='/' element={ <Home /> } />
            <Route exact path='/register' element={ <Register /> } />
            <Route exact path='/login' element={ <Login /> } />
            <Route exact path='/customers' element={ <Customers /> } />
            <Route exact path='/customers/:id' element={ <SingleCustomer /> } />
            <Route path='*' element={ <Error /> } />


          </Routes>
        </div>
      </BrowserRouter>  
    
  );
}

export default App;


