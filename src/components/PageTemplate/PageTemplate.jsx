import React from "react";

const PageTemplate = ({ children, classes }) => {
  return (
    <section
      className={`w-screen h-full sm:h-screen even:bg-white odd:bg-slate-200 ${classes}`}
    >
      {children}
    </section>
  );
};

export { PageTemplate };
