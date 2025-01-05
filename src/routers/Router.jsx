import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../component/Navbar';

const Router = () => {
      return (
            <div className='overflow-x-hidden'>
                  <Navbar />
                  <Routes>
                        <Route path='./' element={<Home />} />
                  </Routes>
            </div>
      );
}

export default Router;