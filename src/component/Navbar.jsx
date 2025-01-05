import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
const Navbar = () => {
      return (
            <>
                  <nav className='flex flex-1 flex-row justify-between px-5 py-7 bg-gray-300 w-full h-20 items-center'>
                        {/* logo section */}
                        <div>
                              <h1 className='text-[30px] font-serif font-medium'>LOGO</h1>
                        </div>
                        {/* menu section */}
                        <div className='flex flex-row gap-4'>

                              <Link to='./'>Home</Link>
                              <Link to='./contact'>Contact</Link>
                              <Link to='./about'>About</Link>

                        </div>
                        {/* icon section */}
                        <div>

                        </div>
                        {/* mobile hamberger menu section */}

                  </nav>

                  {/* mobile sidebar section */}
                  <div>

                  </div>
            </>
      );
}

export default Navbar;
