import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Navbar from '../component/Navbar';

const Router = () => {
      return (
            //add bg color esy to find div lines
            <div className='overflow-x-hidden bg-amber-50 px-4 h-screen' >
                  <Navbar />
                  <Routes>
                        <Route path='./' element={<Home />} />
                  </Routes>
            </div>
      );
}

export default Router;
