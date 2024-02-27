'use client';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import Reveal from '@/animations/Reveal';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareGithub } from 'react-icons/fa6';

const Hero = () => {
  return (
    <section className="bg-[#020605]">
      <div className="container h-full flex flex-col lg:flex-row-reverse justify-between items-center gap-10 py-24">
        <div className="lg:basis-[30%]">
          <Image
            className="rounded-full shadow-2xl animate-floating w-full"
            src="/profile picture.jpg"
            alt="nabinislam"
            height={450}
            width={450}
            data-aos="zoom-in-left"
          />
        </div>
        <div className="lg:basis-[70%] text-center lg:text-left">
          <h3
            className="text-white text-xl lg:text-2xl"
            data-aos="zoom-in-right"
          >
            Hi! I&apos;m Nabin
          </h3>

          <span className="text-white text-2xl lg:text-6xl font-bold">
            <Typewriter
              words={[
                'Front-end Developer',
                'React Developer',
                'MERN Stack Developer',
                'JavaScript Developer',
              ]}
              loop={5}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              data-aos="zoom-in-right"
            />
          </span>

          <h1
            className="text-green-600 text-3xl lg:text-6xl font-bold mt-1"
            data-aos="zoom-in-right"
          >
            Based in Bangladesh
          </h1>

          <h6 className="text-white text-lg mt-2" data-aos="zoom-in-right">
            A passionate{' '}
            <span className="text-green-500">Front-end Developer</span> based in{' '}
            <span className="text-green-500">Bangladesh</span>
          </h6>
          <span
            className="flex items-center justify-center lg:justify-start gap-1 text-3xl my-3"
            data-aos="zoom-in-right"
          >
            <a
              className="hover:scale-125 duration-200"
              href="https://www.linkedin.com/in/nabinislam/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-white" />
            </a>
            <a
              className="hover:scale-125 duration-200"
              href="https://github.com/NabinIslam"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSquareGithub className="text-white" />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
