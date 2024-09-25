import React from 'react';
import { AcademicCapIcon } from '@heroicons/react/16/solid';
import { FaAward, FaLink } from 'react-icons/fa';
import { useState } from 'react';
import PageHeading from '../../components/typopraphy/PageHeading';

const Academics = () => {
    const [activeTab, setActiveTab] = useState('achievements');
    const iconColors = 'text-primary';
    const achievements = [
      {
        id: 1,
        title: 'Best Backend Developer Award',
        description:
          'Awarded for exceptional performance in backend development and system optimization.',
        image:
          'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
      {
        id: 2,
        title: 'Full-Stack Project of the Year',
        description:
          'Recognized for developing an innovative full-stack application that revolutionized user experience.',
        image:
          'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
      {
        id: 3,
        title: 'Open Source Contributor',
        description:
          'Contributed significantly to multiple open-source projects, enhancing community-driven development.',
        image:
          'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      },
    ];

  return (
    <>
      <div className="flex items-center">
        <AcademicCapIcon className={`size-12 mr-5 ${iconColors}`} />
        <PageHeading partOne="my" partTwo="academics" />
      </div>
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-secondary p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-2">
                <FaAward className={`${iconColors} mr-6 size-10`} />
                <h3 className="text-2xl font-bold font-SofadiOne text-gray-800">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-600 my-3 text-md font-medium">
                {achievement.description}
              </p>
              <a
                href={achievement.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLink className={`mr-1 ${iconColors}`} /> View Details
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Academics;
