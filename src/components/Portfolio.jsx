import React from "react";
import Java from "../assets/images/java.png";
import MongoDB from "../assets/images/mongodb.jpg";
import Node from "../assets/images/nodeJS.png";
import ReactImg from "../assets/images/reactjs.png";
import Express from "../assets/images/express.png";

function Portfolio() {
  const cardItems = [
    {
      id: 1,
      logo: Java,
      name: "Java",
    },
    {
      id: 2,
      logo: MongoDB,
      name: "MongoDB",
    },
    {
      id: 3,
      logo: Node,
      name: "Node.js",
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
  return ( <>
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-green-600">
          Featured Projects
        </span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-5">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[350px] border-[2px] rounded-lg shadow-lg p-1 hover:scale-105 duration-200 mb-4 cursor-pointer"
            >
              <img
                src={logo}
                className=" h-[120px] w-[120px] p-1 rounded-full border-[2px]"
                alt="icon"
              />
              <div>
                <div className="underline font-semibold mt-4 mb-2 mx-2">{name}</div>
                <p className="px-2 text-gray-700 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded text-sm">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-sm">
                  Source Code
                </button>
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

export default Portfolio;
