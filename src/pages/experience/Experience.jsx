import React from 'react';
import PageHeading from '../../components/typopraphy/PageHeading';
import { FaAward, FaBriefcase, FaLink } from 'react-icons/fa';
import { useState } from 'react';
import { AcademicCapIcon } from '@heroicons/react/16/solid';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('achievements');
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

  const experiences = [
    {
      id: 1,
      company: 'Tech Innovators Inc.',
      role: 'Senior Backend Developer',
      duration: 'Jan 2020 - Present',
      responsibilities: [
        'Architected and implemented scalable backend systems',
        'Optimized database performance and query efficiency',
        'Mentored junior developers and led code reviews',
      ],
    },
    {
      id: 2,
      company: 'Web Solutions Ltd.',
      role: 'Full-Stack Developer',
      duration: 'Mar 2017 - Dec 2019',
      responsibilities: [
        'Developed end-to-end web applications using modern technologies',
        'Implemented RESTful APIs and integrated third-party services',
        'Collaborated with UX/UI designers to create intuitive user interfaces',
      ],
    },
    {
      id: 3,
      company: 'StartUp Dynamo',
      role: 'Junior Developer',
      duration: 'Jun 2015 - Feb 2017',
      responsibilities: [
        'Assisted in the development of backend services and APIs',
        'Contributed to the maintenance and improvement of existing codebase',
        'Participated in agile development processes and sprint planning',
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col p-2">
      <div className="flex items-center">
        <AcademicCapIcon className="size-12 mr-5 text-blue-500" />
        <PageHeading partOne="my" partTwo="academics" />
      </div>
      {activeTab === 'achievements' && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-2">
                <FaAward className="text-blue-500 mr-6 size-10" />
                <h3 className="text-2xl font-bold font-SofadiOne text-gray-800">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-600 my-3 text-md font-medium">{achievement.description}</p>
              <a
                href={achievement.image}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 flex items-center"
              >
                <FaLink className="mr-1" /> View Details
              </a>
            </div>
          ))}
        </div>
      )}

      <div className="mx-auto w-full">
        <div className="flex items-center">
          <FaBriefcase className="mr-5 text-blue-500 size-9" />
          <PageHeading partOne="my" partTwo="experiences" />
        </div>
        {/* Experience Section */}
        <section>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-white rounded-lg shadow-md p-8 hover:scale-105 lg:hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="text-3xl font-semibold font-SofadiOne mb-2 text-gray-800">
                  {experience.role}
                </h3>
                <p className="text-blue-500 mb-2">{experience.company}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {experience.duration}
                </p>
                <ul className="list-disc font-medium text-md list-inside text-gray-600">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-1">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
