import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import DP from '../assets/profile picture.jpg';

const Header = () => {
  return (
    <div className="shadow sticky top-0 bg-white z-50">
      <div className="container mx-auto">
        <Navbar fluid={true} rounded={true}>
          <Navbar.Brand href="/">
            <img src={DP} className="mr-3 h-6 sm:h-9 rounded-full" alt="" />
            <span className="self-center whitespace-nowrap text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
              Nabin
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="items-center">
            <span className="flex flex-col items-center md:flex-row gap-4">
              <Navbar.Link className="font-bold" href="">
                Home
              </Navbar.Link>
              <Navbar.Link className="font-bold" href="#aboutMe">
                About Me
              </Navbar.Link>
              <Navbar.Link className="font-bold" href="#projects">
                Projects
              </Navbar.Link>
              <Navbar.Link className="font-bold" href="#contact">
                Contact
              </Navbar.Link>
            </span>
            <a
              href="https://drive.google.com/file/d/1PZGnzP3ul8Ys3-5HQK6xb4VBLWOimVn9/view?usp=share_link"
              target="_blank"
            >
              <Button className="bg-gradient-to-r from-[#84739F] to-[#3C51A4]">
                Resume
              </Button>
            </a>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
