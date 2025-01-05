import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';

const Router = () => {
      return (
            <div className=''>
                  <Navbar />
                  <Routes>
                        <Route path='./' element={<Home />} />
                  </Routes>
            </div>
      );
}

export default Router;
