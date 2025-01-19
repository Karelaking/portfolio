import React from "react";

const ShadowButton = ({ buttonText }) => {
  return (
    <button className={`text-md sm:text-2xl font-roboto border-gray-400 hover:bg-black hover:text-white  px-6 sm:px-8 py-2 sm:py-[10px] border-[1px] shadow-mobile sm:shadow-desktop`}>
      {buttonText}
    </button>
  );
};

export { ShadowButton };
