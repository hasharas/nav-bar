import React from 'react';
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import { GiAbstract004 } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Navbar = () => {
      return (
            <>
                  <nav className='container flex  justify-between px-5 py-7  w-full  items-center'>
                        {/* logo section */}
                        <div >

                              <Link to='./' className='flex items-center  gap-2'>
                                    <h1 className='text-[20px] font-serif font-medium uppercase'>Use</h1>
                                    <h1 className='text-[20px] font-serif font-medium text-[#fb923c] uppercase'>LOGO</h1>
                              </Link>
                        </div>
                        {/* menu section */}
                        <div className=' hidden md:flex items-center align-middle gap-6 text-l text-gray-500'>

                              <Link to='./' className='hover:text-[#fb923c]'>Home</Link>
                              <Link to='./contact' className='hover:text-[#fb923c]'>Contact</Link>
                              <Link to='./about' className='hover:text-[#fb923c]'>About</Link>
                              <Link to='./contact' className='hover:text-[#fb923c]'>Contact</Link>
                              <Link to='./about' className='hover:text-[#fb923c]'>About</Link>

                        </div>
                        {/* icon section */}

                        <div className='flex gap-2'>
                              <button className='text-2xl hover:bg-[#fb923c] hover:text-white rounded-full p-2 duration-200'>
                                    <CiSearch className='' />
                              </button>
                              <button className='text-2xl hover:bg-[#fb923c] hover:text-white rounded-full p-2 duration-200'>
                                    <CiShoppingCart className='' />
                              </button>
                              <button className='hover:bg-[#fb923c] text-[#fb923c] font-semibold hover:text-white
                              rounded-md border-2 border-[#fb923c] px-6 py-2 duration-200 hidden md:block'>
                                    LogIn
                              </button>

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
