import { Button, Card } from 'flowbite-react';
import React from 'react';

const Projects = () => {
  return (
    <div className="py-14" id="projects">
      <div className="container mx-auto px-4 md:p-0">
        <h2
          className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]"
          data-aos="fade-up" data-aos-duration="1000"
        >
          Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-7 gap-10">
          <Card data-aos="flip-left" data-aos-duration="1000">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DealFourWheel | Used Car Buy Sell Platform
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Technology used:</span> React, Node,
              Express, MongoDB, TailwindCSS, React Router, Firebase
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <ul>
                <li className="flex items-start font-normal">
                  <span>✔️</span> User can open seller account and post his/her
                  used car for sale.
                </li>
                <li className="flex items-start font-normal">
                  <span>✔️</span> User can open a Buyer account and search
                  desired cars by categories and book posted used cars by
                  sellers.
                </li>
                <li className="flex items-start font-normal">
                  <span>✔️</span> Site admin can delete and verify the sellers
                  and buyers
                </li>
              </ul>
            </p>
            <a href="https://dealfourwheel-c13a1.web.app/" target="_blank">
              {' '}
              <Button className="bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
                Live site
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </a>
          </Card>

          <Card data-aos="flip-up" data-aos-duration="1000">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              DocPort | Dental Appointment Website
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Technology used:</span> React, Node,
              Express, MongoDB, TailwindCSS, React Router, Firebase
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <ul>
                <li className="flex items-start font-normal">
                  <span>✔️</span> User can make appointment of desire dental
                  treatment at desire date.
                </li>
                <li className="flex items-start font-normal">
                  <span>✔️</span> Site admin can add doctor in the website
                </li>
              </ul>
            </p>
            <a href="https://doctors-portal-dcadb.web.app/" target="_blank">
              {' '}
              <Button className="bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
                Live site
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </a>
          </Card>
          <Card data-aos="flip-right" data-aos-duration="1000">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              LearnHub | Online Learning Platform
            </h5>

            <p className="font-normal text-gray-700 dark:text-gray-400">
              <span className="font-bold">Technology used:</span> React, Node,
              Express, TailwindCSS, React Router, Firebase
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              <ul>
                <li className="flex items-start font-normal">
                  <span>✔️</span> User can purchase desire course by category on
                  the website
                </li>
                <li className="flex items-start font-normal">
                  <span>✔️</span> User can download pdf of course details on the
                  course page
                </li>
              </ul>
            </p>
            <a href="https://learn-hub-d6174.web.app/" target="_blank">
              {' '}
              <Button className="bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
                Live site
                <svg
                  className="ml-2 -mr-1 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Button>
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
