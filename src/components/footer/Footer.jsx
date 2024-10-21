import React from 'react';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col bg-secondary justify-center min-h-7xl items-center p-4">
        <div className="text-8xl lg:text-9xl text-black text-center lg:flex justify-center lg:gap-8 items-center font-Staatliches font-medium">
          mradul<div className="">kumar</div>
        </div>

        <div
          id="copyright"
          align="center"
          className="text-black mt-6 text-active"
        >
          {/* <div id="copyright" align="center" className="text-black"> */}
          &copy; 2024 www.your-site.com - All Rights Reserved.
          {/* <span>Last Updated : 09/07/2024 14:38:32</span> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
