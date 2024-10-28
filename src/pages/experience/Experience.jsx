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
      company: 'Oxford Model Inter College, Kanpur, Uttar Pradesh.',
      role: 'Class 10th (High School)',
      duration: '2019 - 2020',
      responsibilities:
        'I have successfully completed my class 10th from UP board with 82% of marks. With the subjects of physics, chemistry, and maths.',
    },
    {
      id: 2,
      company: 'Oxford Model Inter College, Kanpur, Uttar Pradesh.',
      role: 'Class 12th (Inter)',
      duration: '2021 - 2022',
      responsibilities:
        'I have successfully completed my class 12th from UP board with 80% of marks. With the subjects of physics, chemistry, and maths.',
    },
    {
      id: 3,
      company: 'United College of research and engginering, Grater Noida, Uttar pradesh.',
      role: 'B.tech (CSE)',
      duration: '2024 - Present',
      responsibilities:'Currently i am a first year student of b.tech (CSE) in United college of research and engginering, Grater Noida, Uttar pradesh.',
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
                {/* <ul className="list-disc font-medium text-lg list-inside">
                  {experience.responsibilities.map((responsibility, index) => (
                    <li key={index} className="mb-1">
                      {responsibility}
                    </li>
                  ))}
                </ul> */}
                <p>{experience.responsibilities}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Experience;
