import React from "react";
import BookStore from "../assets/images/BookStore.png";
import Myntra from "../assets/images/Myntra.png";
import BatBallStump from "../assets/images/BatBallStump.png";
import ReactImg from "../assets/images/reactjs.png";
import Express from "../assets/images/Express.png";

import BookStoreVideo from "../assets/videos/BookStore.mp4";
import MyntraVideo from "../assets/videos/MyntraFunctional.mp4";
import BatBallVideo from "../assets/videos/BatBallStump.mp4";


function Projects() {
  const cardItems = [
    {
      id: 1,
      logo: BookStore,
      name: "BookStore",
      video: BookStoreVideo,
      code: "https://github.com/sakshamchaudhary123/BookStoreApp",
      description: "MERN stack project for user authentication with signup and login functionality."
    },
    {
      id: 2,
      logo: Myntra,
      name: "Myntra Functional Clone",
      video: MyntraVideo,
      code: "https://github.com/sakshamchaudhary123/Myntra_Functional_Clone",
      description: "Simple e-commerce clone showcasing product browsing"
    },
    {
      id: 3,
      logo: BatBallStump,
      name: "Bat Ball Stump Game",
      video: BatBallVideo,
      code: "https://github.com/sakshamchaudhary123/Bat_Ball_Stump_Game",
      description: "This is a cricket-inspired game built with HTML, CSS, and JavaScript."
    },
    {
      id: 4,
      logo: ReactImg,
      name: "React.js",
    },
    {
      id: 5,
      logo: Express,
      name: "Express.js",
    },
  ];
  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
          <span className="underline font-semibold text-green-600">
            Featured Projects
          </span>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
            {cardItems.map(({ id, logo, name, video, code, description }) => (
              <div
                key={id}
                className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 hover:scale-105 duration-200 mb-4 cursor-pointer"
              >
                <img
                  src={logo}
                  className=" h-[160px] w-[300px] p-1 rounded border-[2px]"
                  alt="img"
                />
                <div>
                  <div className="underline font-semibold mt-4 mb-2 mx-2">
                    {name}
                  </div>
                  <p className="px-2 text-gray-700 ">
                    {description}
                  </p>
                </div>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href={video}>
                    {" "}
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded text-sm">
                      Video
                    </button>
                  </a>
                  <a href={code}>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-sm">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <hr className=" border-gray-400 my-2" />
    </>
  );
}

export default Projects;
