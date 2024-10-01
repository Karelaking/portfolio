import { React, useEffect } from 'react';
import Profile from '../../assets/images/profile.jpg';
import { ArrowDownIcon } from '@heroicons/react/16/solid';
import Title from '../../components/typopraphy/Title';

const screenSize = window.innerHeight;

const WindowScrollHandler = () => {
  window.scrollTo(0, screenSize);
};

export const Home = () => {
  return (
    <>
      <div className="flex flex-col mt-12 items-center lg:h-full h-screen lg:justify-center" id='home'>
        <img
          src={Profile}
          alt="prfile image"
          className="w-1/2 lg:w-2/12 mb-12 lg:mt-16 rounded-full shadow-inner shadow-white ring-2 ring-offset-2 ring-active"
        />
        <div className="w-full flex flex-col items-center">
          <p
            className="text-4xl lg:text-5xl font-DancingScript font-semibold mb-4 lg:mt-0 text-primary"
            data-aos="fade-down"
          >
            Hey , this is
          </p>
          <Title first="mradul" second="katiyar" />
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-xl mt-8 capitalize text-active font-DancingScript font-semibold">
            scroll down
          </p>
          <ArrowDownIcon className="size-7 animate-bounce mt-4 cursor-pointer text-primary" onClick={WindowScrollHandler}/>
        </div>
      </div>
    </>
  );
};
