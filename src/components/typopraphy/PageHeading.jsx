import React from 'react';

const PageHeading = (props) => {
    return (
      <>
        <h1 className="capitalize flex text-4xl my-12 font-bold font-Righteous text-active">
          {props.partOne}
          <span className="mx-2 capitalize">{props.partTwo}</span>
        </h1>
      </>
    );
};

export default PageHeading;
