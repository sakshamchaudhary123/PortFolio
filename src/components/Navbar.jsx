import React, { useState } from "react";
import Pic from "../assets/images/myPhoto2.png";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      title: "Home",
    },
    {
      id: 2,
      title: "About",
    },
    {
      id: 3,
      title: "Projects",
    },
    {
      id: 4,
      title: "Skills",
    },
    {
      id: 5,
      title: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 right-0 left-0 z-50 bg-white">
        <div className="flex justify-between h-16 items-center">
          <div className="flex space-x-4">
            <img src={Pic} className="h-12 rounded-full" alt="" />
            <h1 className="font-semibold text-lg cursor-pointer">
              Saksha<span className="text-green-500 text-2xl">m</span> Chaudhar
              <span className="text-green-500 text-2xl">y</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden  md:flex space-x-8">
              {navItems.map(({ id, title }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link to={title} smooth={true} duration={500} offset={-70} activeClass="active">
                  {title}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={30} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col justify-center items-center h-screen space-y-3 text-xl ">
              {navItems.map(({ id, title }) => (
                <li
                  className="hover:scale-125 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link onClick={() => setMenu(!menu)} to={title} smooth={true} duration={500} offset={-70} activeClass="active">
                  {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
