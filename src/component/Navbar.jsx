import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { GiAbstract004 } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {

      const [isOpen, setIsOpen] = useState(false);
      const toggleMenu = () => {
            setIsOpen(!isOpen); // Toggle the menu visibility
      };
      return (
            <>
                  <nav >
                        <div className='container  flex justify-between px-4 py-7 w-full items-center'>
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
                              {/* mobile hamberger menu */}
                              <div className='md:hidden ' onClick={toggleMenu}>
                                    <IoMdMenu className='cursor-pointer text-3xl' />
                              </div>
                        </div>
                        {/* mobile side bar menu */}
                        {isOpen && (
                              <div className='md:hidden bg-[#fb923c] duration-200 rounded-md' onClick={toggleMenu}>
                                    <ul className='flex flex-col items-center gap-4 py-4'>
                                          <li>
                                                <Link to='/' className=' text-white ' >
                                                      Home
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to='/contact' className='text-white' >
                                                      Contact
                                                </Link>
                                          </li>
                                          <li>
                                                <Link to='/about' className='text-white' >
                                                      About
                                                </Link>
                                          </li>
                                    </ul>
                              </div>
                        )}
                  </nav>
            </>
      );
};

export default Navbar;
