import React from 'react';

const Navbar = () => {
      return (
            <div className='flex flex-1 flex-row justify-between px-5 py-7 bg-gray-300 w-full h-20 items-center'>
                  <div>
                        <h1 className='text-[30px] font-serif font-medium'>LOGO</h1>
                  </div>
                  <div className='flex flex-row gap-4'>
                        <p>Home</p>
                        <p>Contact</p>
                        <p>About</p>
                        <p></p>
                  </div>
                  <div>

                  </div>

            </div>
      );
}

export default Navbar;
