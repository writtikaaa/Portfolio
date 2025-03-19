import React from "react";
//import Spin from "react-reveal/Spin";

const projects = [
  {
    id: 1,
    title: "Employee Management System",
    category: "Full Stack",
    image:
      "./Employee_Management_System.png",
    badges: ["Node", "Express", "React", "MongoDB"],
    link: "https://github.com/writtikaaa/Employee_Frontend",
    //link: "https://github.com/writtikaaa/Employee_Backend",
  },
  {
    id: 2,
    title: "Agricultural E-Commerec",
    category: "Full Stack with Cloud",
    image:
      "./Agrico.jpeg",
    badges: [" Node", "Express", "React", "MongoDB"],
    link: "https://github.com/Risha091/AGRICO",
  },
  {
    id: 3,
    title: "Device Tracker",
    category: "Backend",
    image:
      "./Device_Tracker.png",
    badges: ["Node", "Express", "EJS"],
    link: "https://github.com/writtikaaa/Device_Tracker",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto px-6 py-12 pl-50" id="projects">
      <h2 className="text-3xl font-bold text-center text-teal-700 uppercase">
        Top Recent Projects
      </h2>
      <hr className="w-40 border-teal-700 mx-auto my-4" />
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        
      </p>

      
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <span className="absolute top-2 left-2 bg-orange-400 text-black text-xs px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>
              <div className="p-4 text-center">
                <h5 className="text-lg font-semibold">{project.title}</h5>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {project.badges.map((badge, index) => (
                    <span
                      key={index}
                      className="bg-yellow-400 text-black text-xs px-3 py-1 rounded-full"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="block mt-4 px-6 py-2 text-white bg-teal-700 rounded-full hover:bg-white hover:text-teal-700 hover:border hover:border-teal-700 transition-all"
                >
                  View
                </a>
              </div>
            </div>
          ))}
        </div>
        
    </div>
  );
};

export default Projects;
