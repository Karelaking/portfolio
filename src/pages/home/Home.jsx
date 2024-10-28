import { React } from 'react';
import Profile from '../../assets/images/profile.jpg';
import { ArrowDownIcon } from '@heroicons/react/16/solid';
import Title from '../../components/typopraphy/Title';
import HomeImage from '../../assets/images/home.png';

const screenSize = window.innerHeight;

const WindowScrollHandler = () => {
  window.scrollTo(0, screenSize);
};

const Home = () => {
  return (
    <div className="lg:flex lg:min-h-screen items-center justify-center w-full">
      {/* Right Part */}
      <div className="w-full order-2">
        <img
          src={HomeImage}
          alt="home image"
          className="size-max
        "
        />
      </div>

      {/* Left Part */}
      <div
        className="flex lg:w-1/2 w-full order-1 flex-col mt-12 items-center lg:h-full lg:justify-center lg:px-6"
        id="home"
      >
        <div className="font-DancingScript text-3xl lg:text-5xl text-primary font-bold px-2 text-start w-full">
          hey, i am
        </div>
        {/* Name */}
        <div className="text-7xl lg:text-9xl py-2 lg:pb-6 font-SofadiOne uppercase font-bold text-start w-full">
          mradul
          <div className="text-4xl lg:text-7xl">kumar katiyar</div>
        </div>
        {/* Description */}
        <div className="lg:text-3xl text-xl font-light font-Staatliches w-full text-primary">
          a full stack web developer | backend developer | aspiring artist | and
          good learner.
        </div>
        {/* Git hub data */}
        {/* <div className="flex w-full gap-4 my-4 lg:my-12 justify-between">
          <div className="flex text-active flex-col font-bold font-Staatliches items-center justify-center text-xl lg:text-3xl">
            Repositories
            <span className="text-md font-light text-primary">1500+</span>
          </div>
          <div className="flex text-active flex-col font-bold font-Staatliches items-center justify-center text-xl lg:text-3xl">
            Total Commits
            <span className="text-md font-light text-primary">1500+</span>
          </div>
          <div className="flex text-active flex-col font-bold font-Staatliches items-center justify-center text-xl lg:text-3xl">
            Contribution
            <span className="text-md font-light text-primary">1500+</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
