import React from 'react';
import PageHeading from '../../components/typopraphy/PageHeading';
import CardWithImage from '../../components/cards/CardWithImage';
import { BeakerIcon } from '@heroicons/react/16/solid';

const Projects = () => {
  const iconColor = 'text-primary';
  return (
    <>
      <div id="projects" className="flex flex-wrap w-full h-max gap-4">
        <div className="flex items-center w-full">
          <BeakerIcon className={`size-12 mr-5 ${iconColor}`} />
          <PageHeading partOne="my" partTwo="projects" />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CardWithImage
            image="https://placehold.co/600x400"
            title="demo title"
            description="Awarded for exceptional performance in backend development and system optimization."
            link="/"
          />
          <CardWithImage
            image="https://placehold.co/600x400"
            title="demo title"
            description="this is description. Awarded for exceptional performance in backend development and system optimization."
            link="/"
          />
          <CardWithImage
            image="https://placehold.co/600x400"
            title="demo title"
            description="this is description. Awarded for exceptional performance in backend development and system optimization."
            link="/"
          />
        </div>
      </div>
    </>
  );
};

export default Projects;
