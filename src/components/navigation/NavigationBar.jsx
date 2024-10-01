import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { Link } from 'react-scroll';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  return (
    <nav
      className={`sticky z-10 w-full top-0 left-0 bg-primary text-gray-800 shadow transition-colors duration-300`}
      data-aos="fade-down"
    >
      <div className="w-full flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-2xl text-white font-SofadiOne font-semibold whitespace-nowrap ">
            KatiyarMradul_
          </span>
        </a>
        <div className="flex md:order-2">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          id="navbar-sticky"
        >
          <ul
            className={`flex flex-col p-4 md:p-0 items-center mt-4 font-bold text-xl h-screen lg:h-max rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-50 border-gray-100 font-DancingScript`}
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                href={item.link}
                  className={`block cursor-pointer py-2 pl-3 pr-4 rounded md:hover:bg-transparent hover:text-white md:p-0 text-grey text-xl`}
                  aria-current="page"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
