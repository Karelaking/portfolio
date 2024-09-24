import React from 'react';

const CardWithImage = (props) => {
  return (
    <>
      <div className="mx-2 overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl hover:scale-105 lg:hover:scale-110 duration-300">
        <img
          src={props.image}
          className="aspect-video w-full object-cover"
          alt=""
        />
        <div className="p-4">
          <h3 className="text-3xl capitalize font-SofadiOne font-bold text-gray-900">
            {props.title}
          </h3>
          <p className="mt-1 text-md font-medium text-gray-500">{props.description}</p>
          <p className="text-sm text-blue-400 my-2 capitalize">
            jun 2015 - feb 2017
          </p>
          <div className="mt-4 flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
              {' '}
              Design{' '}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
              {' '}
              Product{' '}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
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
