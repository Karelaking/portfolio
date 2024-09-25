import React from 'react';

const Title = (props) => {
  return (
    <div
      className="text-8xl lg:text-9xl text-black text-center border-primary lg:flex justify-center lg:gap-8 items-center font-Staatliches font-medium border-y-4 border-black"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {props.first}
      <div className="">{props.second}</div>
    </div>
  );
};

export default Title;
