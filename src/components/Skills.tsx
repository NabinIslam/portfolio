import Image from 'next/image';
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML', path: '/HTML5.png' },
    { name: 'CSS', path: '/CSS3.png' },
    { name: 'TailwindCSS', path: '/Tailwind CSS.png' },
    { name: 'Bootstrap', path: '/Bootstrap.png' },
    { name: 'JavaScript', path: '/JavaScript.png' },
    { name: 'TypeScript', path: '/TypeScript.png' },
    { name: 'React', path: '/React.png' },
    { name: 'Next.js', path: '/Next.js.png' },
    { name: 'Redux', path: '/Redux.png' },
    { name: 'Firebase', path: '/Firebase.png' },
    { name: 'Node', path: '/Node.js.png' },
    { name: 'Express', path: '/Express.png' },
    { name: 'MongoDB', path: '/MongoDB.png' },
  ];

  return (
    <>
      <h3
        className="text-3xl font-bold text-center text-white mt-20 mb-16"
        data-aos="zoom-in"
      >
        Skills
      </h3>
      <div className="flex flex-row justify-center items-center flex-wrap gap-5">
        {skills.map((skill, index) => (
          <div
            className="bg-slate-800 p-4 w-40 h-40 flex flex-col justify-center items-center gap-1 rounded-3xl hover:scale-125 duration-500 shadow-2xl hover:rotate-[360deg]"
            key={index}
            data-aos="zoom-in"
          >
            <Image
              className="mx-auto"
              src={skill.path}
              height={70}
              width={70}
              alt={skill.name.toLocaleLowerCase()}
            />
            <h6 className="text-white text-sm text-center">{skill.name}</h6>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
