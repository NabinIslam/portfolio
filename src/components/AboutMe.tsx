'use client';
import Image from 'next/image';
import Reveal from '@/animations/Reveal';
import Skills from './Skills';

const AboutMe = () => {
  return (
    <section className="bg-[#191C26]">
      <div className="container py-24">
        <div className="flex items-center gap-2">
          <h6
            className="font-bold text-green-500 before:c]"
            data-aos="fade-right"
          >
            About Me
          </h6>
          <div
            className="w-[40px] h-[2px] bg-green-600"
            data-aos="fade-right"
          ></div>
        </div>
        <h2
          className="text-white font-extrabold text-5xl my-6"
          data-aos="fade-right"
        >
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-20">
          <div className="basis-1/2" data-aos="fade-right">
            <Image
              className="rounded-xl w-full"
              src="/aboutMe.jpg"
              height={500}
              width={500}
              alt="Nabin Islam"
            />
          </div>
          <div className="basis-1/2" data-aos="fade-left">
            <h3 className="text-white text-3xl font-bold">
              I&apos;m Nabin Islam
            </h3>
            <h6 className="text-white text-lg mt-2">
              A passionate{' '}
              <span className="text-green-600">Front-end Developer</span> based
              in <span className="text-green-600">Bangladesh</span>
            </h6>
            <p className="text-[#A9AFC3] text-md my-2">
              Highly motivated and detail-oriented web developer with a passion
              for creating dynamic and user-friendly websites. Seeking to
              leverage my strong technical skills, creative problem-solving
              abilities, and dedication to delivering high-quality web solutions
              to contribute to a dynamic and innovative team. Committed to
              staying current with the latest web development technologies and
              trends to ensure the delivery of cutting-edge, responsive, and
              visually appealing web applications that meet the needs of clients
              and users.
            </p>
            <hr className="border-gray-600 mt-5" />
            <h5>PERSONAL INFO</h5>
            <div className="flex flex-col lg:flex-row gap-3">
              <div className="space-y-3 lg:basis-1/2">
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Name:</span> Nabin Islam
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Age:</span> 24 Years
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Nationality:</span> Bangladesh
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Freelance:</span> Available
                </h6>
              </div>
              <div className="space-y-3 lg:basis-1/2">
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Address:</span> Mirpur, Dhaka
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Phone:</span> +880 1743 724938
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Email:</span>{' '}
                  sinabin62246@gmail.com
                </h6>
                <h6 className="text-white font-semibold text-sm">
                  <span className="text-gray-400">Languages:</span> English,
                  Bengali
                </h6>
              </div>
            </div>

            {/* resume button */}
            <a
              href="https://drive.google.com/file/d/1Z3yJnF-QMw8tNx6pTBJZTnf1aQbm8bND/view?usp=sharing"
              target="_blank"
            >
              <button className="relative inline-block text-lg group mt-5">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Resume</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </a>
          </div>
        </div>

        <Skills />
      </div>

      {/* container ends */}
    </section>
  );
};

export default AboutMe;
