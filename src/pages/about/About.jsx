import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaTelegramPlane } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const iconSize = 28;
const iconColor = '';

const icons = [
  {
    icon: <FaFacebookF size={iconSize} color="#3b5998" />,
    href: 'https://www.facebook.com/katiyar.karela.king',
    text: 'Facebook',
    target: '_blank',
  },
  {
    icon: <FaInstagram size={iconSize} color="#e4405f" />,
    href: 'https://www.instagram.com/katiyar_karela_king/',
    text: 'Instagram',
    target: '_blank',
  },
  {
    icon: <FaDiscord size={iconSize} color="#7289da" />,
    href: 'https://discord.com/users/756895253168136235',
    text: 'Discord',
    target: '_blank',
  },
  {
    icon: <FaTelegramPlane size={iconSize} color="#0088cc" />,
    href: 'https://t.me/katiyar',
    text: 'Telegram',
    target: '_blank',
  },
  {
    icon: <FaXTwitter size={iconSize} color="#1da1f2" />,
    href: 'https://twitter.com/katiyar_mradul',
    text: 'Twitter',
    target: '_blank',
  },
  {
    icon: <FaGithub size={iconSize} color="#333333" />,
    href: 'https://github.com/karelaking',
    text: 'GitHub',
    target: '_blank',
  },
  {
    icon: <FaLinkedinIn size={iconSize} color="#0077B5" />,
    href: 'www.linkedin.com/in/kumar-mradul-katiyar',
    text: 'LinkedIn',
    target: '_blank',
  },
  {
    icon: <MdEmail size={iconSize} color="#212121" />,
    href: 'mailto:karelaking277@gmail.com',
    text: 'Email',
    target: '_blank',
  },
];

export const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex flex-col w-full justify-center items-center lg:h-screen"
      >
        <div className="w-full flex flex-col items-center">
          <h1 className="font-Staatliches lg:text-8xl text-6xl text-center">mradul kumar katiyar</h1>
        </div>
        <p
          className="text-3xl lg:text-4xl p-3 my-2 lg:px-48 lg:my-6 text-primary lg:text-center font-DancingScript text-center font-medium"
          // data-aos="fade-up"
        >
          A passionate programmer and developer from very vaibrent city Kanpur,
          Uttar Pradesh, India. Currently a student, I'm always on the lookout
          for new ways to enhance my skills and push the boundaries of what's
          possible with code.
        </p>
        <div className="flex flex-wrap gap-6 lg:gap-12 my-8 justify-center">
          {icons.map((icon) => (
            <div className="flex flex-col items-center">
              <a
                key={icon.href}
                href={icon.href}
                target={icon.target}
                className="flex items-center gap-2"
              >
                {icon.icon}
              </a>
              <p className="text-md font-SofadiOne font-medium">{icon.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
