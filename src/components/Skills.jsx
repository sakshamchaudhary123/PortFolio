import React from "react";
import Java from "../assets/images/java.png";
import MongoDB from "../assets/images/mongodb.jpg";
import Node from "../assets/images/nodeJS.png";
import ReactImg from "../assets/images/reactjs.png";
import Express from "../assets/images/express.png";
import HTML from "../assets/images/Html.png";
import CSS from "../assets/images/CSS.jpg";
import JS from "../assets/images/Javascript.png";


function Skills() {
  const cardItems = [
    {
      id: 1,
      logo: Java,
      name: "Java",
    },
    {
      id: 2,
      logo: HTML,
      name: "HTML",
    },
    {
      id: 3,
      logo: CSS,
      name: "CSS",
    },
    {
      id: 4,
      logo: JS,
      name: "Javascript",
    },
    {
      id: 5,
      logo: ReactImg,
      name: "React.js",
    },
    {
      id: 6,
      logo: MongoDB,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: Node,
      name: "Node.js",
    },
    {
      id: 8,
      logo: Express,
      name: "Express.js",
    },
  ];
  return ( <>
    <div name="Skills" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10 mb-5">
      <div>
        <h1 className="text-3xl font-bold mb-5">Skills</h1>
        <span className="underline font-semibold text-green-600">
        Proficient in the following skills
        </span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 mt-5">
          {cardItems.map(({ id, logo, name }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center border-[3px] rounded-full p-1 hover:scale-105 duration-200 mb-4 cursor-pointer md:h-[200px] md:w-[200px] shadow-md"
            >
              <img
                src={logo}
                className="h-[120px]  rounded-full mt-2"
                alt="icon"
              />
              <div className="underline font-semibold mt-4 mb-2 mx-2">{name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <hr className=" border-gray-400 my-2" />
    </>
  );
}

export default Skills;
