import React from 'react';
import html from '../assets/logos/html.png';
import css from '../assets/logos/css.webp';
import js from '../assets/logos/js.svg';
import react from '../assets/logos/react.png';
import node from '../assets/logos/node.png';
import express from '../assets/logos/express.png';
import mongo from '../assets/logos/mongo.png';
import tailwind from '../assets/logos/tailwind.png';
import bootstrap from '../assets/logos/bootstrap.png';
import vscode from '../assets/logos/vscode.png';
import firebase from '../assets/logos/firebase.png';
import photoshop from '../assets/logos/photoshop.png';
import figma from '../assets/logos/figma.svg';

const SkillAndTechs = () => {
  return (
    <div className="py-14" id="aboutMe">
      <div
        className="container mx-auto px-4 md:p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 my-10">
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={html}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={css}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={js}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={react}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={node}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={express}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={mongo}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={tailwind}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={bootstrap}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={firebase}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={photoshop}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={figma}
              width={100}
              alt=""
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              classname="text-center shadow-2xl"
              data-aos="fade-up"
              data-aos-duration="1000"
              src={vscode}
              width={100}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillAndTechs;
