import React from 'react';
import { Link } from 'react-router-dom';

const CardWithImage = (props) => {
  return (
    <>
      <div className="mx-2 overflow-hidden rounded-lg bg-secondary shadow-md hover:shadow-xl hover:scale-105 lg:hover:scale-110 duration-300">
        <img
          src={props.image}
          className="aspect-video w-full object-cover"
          alt=""
        />
        <div className="p-4">
          <Link to={props.link}>
            <h3 className="text-4xl capitalize font-SofadiOne font-bold">
              {props.title}
            </h3>
          </Link>
          <p className="mt-1 text-lg font-medium">
            {props.description}
          </p>
          <p className="text-md text-primary my-2 capitalize">
            jun 2015 - feb 2017
          </p>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-sl">
              {' '}
              Design{' '}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-sl">
              {' '}
              Product{' '}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-sl">
              {' '}
              Develop{' '}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardWithImage;
