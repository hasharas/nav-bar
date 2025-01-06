import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { GiAbstract004 } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {
      return (
            <>
                  <nav className='container flex justify-between px-4 py-7 w-full items-center'>
                        {/* Logo section */}
                        <div>
                              <Link to='/' className='flex items-center gap-2'>
                                    <h1 className='text-[20px] font-serif font-medium uppercase'>Use</h1>
                                    <h1 className='text-[20px] font-serif font-bold text-[#fb923c] uppercase'>LOGO</h1>
                              </Link>
                        </div>

                        {/* Menu section */}
                        <div className='hidden md:flex items-center gap-6 text-l text-gray-500'>
                              <Link to='/' className='hover:text-[#fb923c]'>Home</Link>
                              <Link to='/contact' className='hover:text-[#fb923c]'>Contact</Link>
                              <Link to='/about' className='hover:text-[#fb923c]'>About</Link>
                        </div>

                        {/* Icon section */}
                        <div className='flex items-center gap-2'>
                              <button className='text-2xl hover:bg-[#fb923c] hover:text-white rounded-full p-2 duration-200'>
                                    <CiSearch />
                              </button>
                              <button className='text-2xl hover:bg-[#fb923c] hover:text-white rounded-full p-2 duration-200'>
                                    <CiShoppingCart />
                              </button>
                              <button className='hidden md:block hover:bg-[#fb923c] text-[#fb923c] font-semibold hover:text-white rounded-md border-2 border-[#fb923c] px-6 py-2 duration-200'>
                                    LogIn
                              </button>
                        </div>
                  </nav>
            </>
      );
};

export default Navbar;
