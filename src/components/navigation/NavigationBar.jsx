import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { NavLink, Link } from 'react-router-dom';
import { MdLogin } from 'react-icons/md';
import { CiLogout } from 'react-icons/ci';



const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Experience', link: '/experience' },
    { name: 'Skills', link: '/skills' },
    { name: 'Projects', link: '/projects' },
    { name: 'Contact', link: '/contacts' },
  ];

  return (
    <nav
      className={`sticky z-10 w-full top-0 left-0 bg-primary text-gray-800 shadow transition-colors duration-300 lg:px-12 px-1 rounded-bl-xl rounded-br-xl`}
      data-aos="fade-down"
    >
      <div className={`${isMenuOpen ? ' justify-center flex-col lg:block' : 'justify-between'} items-center mx-auto p-4 max-w-screen-2xl px-6 flex`}>
        {/* Logo */}
        <Link to={'/'} className="flex order-1 items-center">
          <span className={`self-center ${isMenuOpen ? 'hidden lg:block' : 'block'} text-2xl text-white font-SofadiOne font-semibold whitespace-nowrap`}>
            KatiyarMradul_
          </span>
        </Link>
        {/* Toggal Button */}
        <div className="flex order-3 lg:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <XMarkIcon className="text-white" />
            ) : (
              <Bars3Icon className="text-white" />
            )}
          </button>
        </div>
        {/* Navigation Link */}
        <div
          className={`items-center justify-between lg:w-max md:flex md:w-auto order-1 lg:order-2 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 items-center mt-4 font-bold text-xl h-fit lg:h-max rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 border-gray-100`}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.name}
                className={({ isActive, isPending }) =>
                  isActive
                    ? 'text-white'
                    : `block cursor-pointer py-2 pl-3 pr-4 rounded md:hover:bg-transparent hover:text-white md:p-0 text-xl`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                <li>{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </div>
        {/* Login & Logout */}
        <div
          className={`order-2 mb-8 lg:order-3 md:block ${isMenuOpen ? 'block lg:hidden' : 'hidden'} bg-white px-6 py-2 rounded-3xl w-max`}
        >
          {isLoggedIn ? (
            <button className="flex justify-center items-center gap-4">
              <MdLogin className="size-5" />
              Login
            </button>
          ) : (
            <button className="flex justify-center items-center gap-4">
              <CiLogout className="size-5" />
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
