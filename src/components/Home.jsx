import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

import { ReactTyped } from "react-typed";

import Pic from "../assets/images/myPhoto2.png";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className="flex flex-col md:flex-row">
          {/* Left : Text div */}
          <div className="md:w-1/2 mt-12 md:mt-12 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold "
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
                />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              Hi, I’m Saksham Chaudhary, a passionate Web Developer, currently
              pursuing my BTech in Computer Science Engineering. With a strong
              foundation in front-end development using technologies like HTML,
              CSS, JavaScript, and experience working with frameworks like
              React, I love creating clean and efficient web solutions. 
              <br />
              <br />
              I’m always eager to learn new technologies and tools, and I’m currently exploringback-end development with Node.js and Express.  My
              goal is to continue learning, improving my skills, and
              contributing to innovative projects. 
              <br /> 
              <br />
            </p>
            <br />
            {/* Socila Media Icons */}
           <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 items-center">
           <div className="space-y-2">
              <h1 className="font-bold">Avaliable on</h1>
              <ul className="flex space-x-4 ">
                <li className="hover:scale-125 duration-200 cursor-pointer">
                  <a href="https://www.linkedin.com/in/saksham-chaudhary12/" target="_blank">
                  <AiFillLinkedin className="text-xl md:text-2xl" />
                  </a>
                </li>
                <li className="hover:scale-125 duration-200 cursor-pointer">
                  <a href="https://github.com/sakshamchaudhary123" target="_blank">
                  <FaGithub className="text-xl md:text-2xl" />
                  </a>
                </li>
                <li className="hover:scale-125 duration-200 cursor-pointer">
                  <a href="mailto:Chaudharysaksham@gmail.com" target="_blank">
                  <BiLogoGmail className="text-xl md:text-2xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h1 className="font-bold">Currently working on</h1>
              <div className="flex justify-around">
                    <SiMongodb className="text-xl md:text-2xl hover:scale-125 duration-200 rounded-full border-[2px]" />
                    <SiExpress className="text-xl md:text-2xl hover:scale-125 duration-200 rounded-full border-[2px]" />
                    <FaReact className="text-xl md:text-2xl hover:scale-125 duration-200 rounded-full border-[2px]" />
                    <FaNodeJs className="text-xl md:text-2xl hover:scale-125 duration-200 rounded-full border-[2px]" />
              </div>
            </div>
           </div>

          </div>
          {/* Right : Image div */}
          <div className="md:w-1/2 mt-5 flex justify-center md:mt-12 order-1 md:order-2 " >
          <img className="md:h-[500px] rounded-full" src={Pic} alt="" />
          </div>
        </div>
      </div>  
      <hr className=" border-gray-400 my-2" />
    </>
  );
}

export default Home;
