import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
  return (
    <>
      <footer className="py-10">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className="flex flex-col justify-center items-center">
            <ul className="flex space-x-4 ">
              <li className="hover:scale-125 duration-200 cursor-pointer">
                <a
                  href="https://www.linkedin.com/in/saksham-chaudhary12/"
                  target="_blank"
                >
                  <AiFillLinkedin className="text-2xl md:text-3xl" />
                </a>
              </li>
              <li className="hover:scale-125 duration-200 cursor-pointer">
                <a
                  href="https://github.com/sakshamchaudhary123"
                  target="_blank"
                >
                  <FaGithub className="text-2xl md:text-3xl" />
                </a>
              </li>
              <li className="hover:scale-125 duration-200 cursor-pointer">
                <a href="mailto:Chaudharysaksham@gmail.com" target="_blank">
                  <BiLogoGmail className="text-2xl md:text-3xl" />
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8 flex flex-col items-center">
            <div className="border-t border-gray-700 max-w-sm pt-4">
              <p className="text-center">
                &copy; 2024 Saksham Chaudhary. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
