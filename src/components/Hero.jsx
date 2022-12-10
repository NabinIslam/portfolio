import React from 'react';
import DP from '../assets/profile picture.jpg';
import { BsFillEnvelopeFill, BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaReact } from 'react-icons/fa';
import './hero.css';

const Hero = () => {
  return (
    <div className=" py-20 bg-gradient-to-r from-[#F5F7FA] to-[#B8C6DB]">
      <div className="container mx-auto flex flex-col-reverse gap-10 items-center md:flex-row md:justify-evenly">
        <div className="px-4 md:p-0">
          <h1
            className="font-normal text-4xl mb-5 text-center md:text-start"
            data-aos="fade-right"
          >
            Hey it's{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
              Md. Shaikul Islam Nabin
            </span>{' '}
            here!
          </h1>

          <h2
            className="text-2xl font-normal mb-5 text-center md:text-start"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            A passionate{' '}
            <span className="font-bold text-[#00D1F2] flex items-center gap-1">
              <FaReact />

              <span>React Developer</span>
            </span>{' '}
            from{' '}
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-red-600">
              {' '}
              Bangladesh
            </span>
          </h2>
          <div className="flex justify-center md:justify-start">
            <div data-aos="fade-right" data-aos-duration="1000">
              <p className="font-semibold flex items-center gap-1">
                <BsFillEnvelopeFill />
                Email:
                <a
                  className="font-normal hover:text-blue-800"
                  href="mailto:sinabin62246@gmail.com"
                  target="_blank"
                >
                  {' '}
                  sinabin62246@gamil.com
                </a>
              </p>
              <p className="font-semibold flex items-center gap-1">
                <BsLinkedin /> LinkedIn:
                <a
                  className="font-normal hover:text-blue-800"
                  href="https://www.linkedin.com/in/nabinislam/"
                  target="_blank"
                >
                  {' '}
                  Md Shaikul Islam Nabin
                </a>
              </p>
              <p className="font-semibold flex items-center gap-1">
                <BsGithub />
                GitHub:
                <a
                  className="font-normal hover:text-blue-800"
                  href="https://github.com/nabinislam"
                  target="_blank"
                >
                  {' '}
                  Md Shaikul Islam Nabin
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 md:p-0">
          <img
            className="rounded-3xl shadow-2xl"
            src={DP}
            alt=""
            data-aos="fade-left"
            data-aos-duration="1000"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
