import React from 'react';
import PageHeading from '../../components/typopraphy/PageHeading';
import { FaAward, FaBriefcase, FaLink } from 'react-icons/fa';
import { useState } from 'react';
import { AcademicCapIcon } from '@heroicons/react/16/solid';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('achievements');
  const iconColors = 'text-primary';

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
      <div className="mx-auto w-full">
        <div className="flex items-center">
          <FaBriefcase className={`mr-5 size-9 ${iconColors}`} />
          <PageHeading partOne="my" partTwo="experiences" />
        </div>
        {/* Experience Section */}
        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="bg-secondary rounded-lg shadow-md p-8 hover:scale-105 lg:hover:scale-110 transition-all duration-300 hover:shadow-2xl"
              >
                <h3 className="text-3xl font-semibold font-SofadiOne mb-2 text-gray-800">
                  {experience.role}
                </h3>
                <p className={`mb-2 text-xl ${iconColors}`}>{experience.company}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {experience.duration}
                </p>
                <ul className="list-disc font-medium text-lg list-inside">
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
