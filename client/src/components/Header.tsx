import React from 'react';
import { Link } from 'react-router-dom'
import DropDownMenu, { DDMItem } from './DropDownMenu'; // Assuming DropDownMenu is in a separate file

    
// export default function Header() {
//   return (
    // <header className='bg-sky-50 text-slate-900 px-4 sm:px-8'>
    //     <div className='flex justify-between items-center max-w-7xl font-mono mx-auto py-7'> 
    //         <Link to='/'>
    //         <h1 className='font-bold text-md sm:text-2xl flex flex-wrap'>
    //             <span>Inn</span>
    //             <span>Sight</span>
    //         </h1>
    //         </Link>
    //         <ul className='flex gap-2'>
    //             <Link to='/'>
    //             <li className='hidden sm:inline py-2 px-7 rounded-xl  uppercase hover:text-sky-500 cursor-pointer'>Home</li>
    //             </Link>
    //             <Link to='Blog'>
    //             <li className='sm:inline py-2 px-7 rounded-xl uppercase hover:text-sky-500 cursor-pointer'>Blog</li>
    //             </Link> 
    //             <Link to='list-properties'>
    //             <li className='hidden sm:inline py-2 px-7 rounded-xl uppercase  hover:text-sky-500 cursor-pointer'>Listings</li>
    //             </Link>  
    //             <Link to='sign-in'>
    //             <li className='sm:inline py-2 px-7 rounded-xl uppercase hover:text-sky-500 cursor-pointer'>Sign in</li>
    //             </Link>  
                           
    //         </ul>
    //     </div>
    // </header>
    
    
    const Navigation = () => { 
      const dropdownItems: DDMItem[] = [
        { label: 'Settings', link: '/settings' },
        { label: 'Account', link: '/account' },
        { label: 'Logout', link: '/logout' }
      ];
    
      return (
      <div>
        <nav className="bg-white shadow">
          <div className="px-8 mx-auto max-w-7xl pt-[1
            rem]">
            <div className="flex items-center justify-between h-16 text-2xl">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0">
                In<span className="bg-gray-100 px-1 rounded">SIGHT</span>
                </Link>
                <div className="hidden md:block">
                  <div className="flex items-baseline ml-10 space-x-4">
                    <Link
                      to="/"
                      className="text-gray-800 hover:text-gray-900  px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Home
                    </Link>
                    <Link
                      to="Blog"
                      className="text-gray-800  hover:text-gray-800  px-3 py-2 rounded-md text-lg font-medium"
                    >
                    Blog
                    </Link>
                    <Link
                      to="list-properties"
                      className="text-gray-800 hover:text-gray-800  px-3 py-2 rounded-md text-lg font-medium"
                    >
                    Listings
                    </Link>
                    <Link
                      to="Login"
                      className="text-gray-800 hover:text-gray-800  px-3 py-2 rounded-md text-lg font-medium"
                    >
                      Login
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className="block">
                
                <div className="relative ml-3">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="flex items-center justify-center  rounded-md px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          className="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                          </path>
                        </svg>
                      </button>
                    </div>
                    <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="#"
                          className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span className="flex flex-col">
                            <span>Settings</span>
                          </span>
                        </a>
                        <a
                          href="#"
                          className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span className="flex flex-col">
                            <span>Account</span>
                          </span>
                        </a>
                        <a
                          href="#"
                          className="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span className="flex flex-col">
                            <span>Logout</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex -mr-2 md:hidden">
                <button className="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="w-8 h-8"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {/* Links for mobile navigation */}
              <Link
                to="/"
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                to="/gallery"
                className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </Link>
              <Link
                to="/content"
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Content
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>
      </div>
    );
  };
    export default Navigation;

    
    
 