import React from 'react';
import PageHeading from '../../components/typopraphy/PageHeading';
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaServer,
  FaCodeBranch,
} from 'react-icons/fa';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiLinux,
  SiWindows11,
  SiVisualstudiocode,
  SiPostman,
  SiFlask,
  SiDjango,
} from 'react-icons/si';
import { CodeBracketIcon } from '@heroicons/react/16/solid';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <FaCode className="text-3xl mb-2" />,
      skills: [
        { name: 'JavaScript', icon: <SiJavascript /> },
        { name: 'Python', icon: <SiPython /> },
      ],
    },
    {
      title: 'Frameworks',
      icon: <FaCodeBranch className="text-3xl mb-2" />,
      skills: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Node.js', icon: <SiNodedotjs /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'Django', icon: <SiDjango /> },
        { name: 'Flask', icon: <SiFlask /> },
      ],
    },
    {
      title: 'Databases',
      icon: <FaDatabase className="text-3xl mb-2" />,
      skills: [
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
      ],
    },
    {
      title: 'Tools',
      icon: <FaTools className="text-3xl mb-2" />,
      skills: [
        { name: 'Docker', icon: <SiDocker /> },
        { name: 'Git', icon: <SiGit /> },
        { name: 'VS Code', icon: <SiVisualstudiocode /> },
        { name: 'Postman', icon: <SiPostman /> },
      ],
    },
    {
      title: 'Other',
      icon: <FaServer className="text-3xl mb-2" />,
      skills: [
        { name: 'Linux', icon: <SiLinux /> },
        { name: 'Windows 11', icon: <SiWindows11 /> },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="mx-auto">
        <div className="flex w-full items-center">
          <CodeBracketIcon className="size-12 mr-5 text-blue-500" />
          <PageHeading partOne="my" partTwo="skills" />
        </div>
        <div className="grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white mx-2 flex flex-col items-center justify-center overflow-hidden shadow-md rounded-lg"
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center"
                    >
                      <div className="text-3xl mb-2">{skill.icon}</div>
                      <span className="text-sm text-gray-600">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
