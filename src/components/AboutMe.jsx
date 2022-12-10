import React from 'react';

const AboutMe = () => {
  return (
    <div className="py-14" id="aboutMe">
      <div
        className="container mx-auto px-4 md:p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-center text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
          About Me
        </h2>
        <p className="max-w-3xl text-center mt-5 mx-auto">
          Hi there! I'm <span className="font-bold">Nabin</span>, a Passionate
          React Web Appliation Developer from Bangladesh. I mostly work in
          React, Node, Express and, MongoDB stack. I'm very much passionate
          about web development. I have the ability to learn quickly and take
          challenges. I'm very much interested in new technologies. My goal is
          to be a Full Stack Developer. You can say web development is my dream.
          Check out some of my projects. If you find it interesting then contact
          me. Thank you
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
