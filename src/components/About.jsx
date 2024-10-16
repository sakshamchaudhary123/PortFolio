import React from "react";

function About() {
  return (<>
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10">
      <div>
      <h1 className="text-3xl font-bold mb-5">About</h1>
      <p className="text-sm md:text-md text-justify">
        I’m a curious developer passionate about learning new technologies and
        eager to contribute to innovative web development projects that
        positively impact users and enhance their experiences through creativity
        and collaboration.
      </p>
      <br />
      {/* Education & Skills */}
      {/* College */}
      <h1 className="text-green-600 font-semibold underline text-xl">
        Education and Training
      </h1>
      <p className="ml-10 md:ml-20 mt-2">
        {" "}
        <span className="font-bold ">
          Bachelor of Technology (B.Tech) in Computer Science Engineering
        </span>{" "}
        <br />
        <span className="text-sm">- Dr. A.P.J. Abdul Kalam Technical University</span>
        <br />
        <span className="text-sm">- (Sept 2021 - Present)</span>
      </p>
      <br />
      {/* School */}
      <p className="ml-10 md:ml-20">
        <span className="font-bold ">Shiksha International School</span> <br />
        <span className="text-sm">-12<span className="text-base align-super">th</span>  ||  10<span className="text-base align-super">th</span> (2021 || 2019)</span>
      </p>
      <br />
        {/* Skills */}
      <h1 className="text-green-600 font-semibold underline text-xl mb-2">
      Skills & Expertise
      </h1>
        <ul className="ml-10 md:ml-20 text-sm space-y-2">
            <li>- Proficient in <span className="font-bold">Java and C programming languages</span> , with a strong foundation in algorithm development and data structures.</li>
            <li>- Experienced with the <span className="font-bold">MERN Stack</span>  (MongoDB, Express.js, React, Node.js), allowing for the development of dynamic web applications.</li>
            <li>- Familiar with essential tools such as <span className="font-bold">Git/GitHub</span>  for version control, <span className="font-bold">Postman</span>  for API testing, and <span className="font-bold">AWS</span>  for cloud services.</li>
            <li>- Strong grasp of Design Principles and Concepts, including contrast, alignment, and hierarchy, to create user-friendly interfaces.</li>
            <li>- Effective communicator and collaborator, skilled at working in team environments to achieve common goals.</li>
        </ul>
      </div>
    </div>
      <hr className=" border-gray-400 my-2" />
    </> 
  );
}

export default About;
