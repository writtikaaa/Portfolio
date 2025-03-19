import React from "react";
import { motion } from "framer-motion";
import { TechstackList } from "../../utils/TechstackList";

const Techstack = () => {
  return (
    <div className=" px-4 sm:px-10 mt-10 " id="techstack">
      {/* Title Section */}
      <motion.h2
        className="text-2xl sm:text-3xl font-bold text-teal-700 text-center uppercase pl-50"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Technologies Stack
      </motion.h2>
      <motion.hr
        className="w-48 sm:w-96 mx-auto my-3 border-teal-700 "
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8 }}
      />
      <motion.p
        className="text-center text-gray-600 pl-50"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👉 Including programming languages, frameworks, databases, front-end &
        back-end tools, and APIs.
      </motion.p>

      {/* Tech Stack Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 pl-50">
        {TechstackList.map((tech, index) => (
          <motion.div
            key={tech._id}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 text-center cursor-pointer hover:bg-teal-700 hover:text-white transition duration-500"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-center items-center">
              <tech.icon className="text-4xl text-teal-700 hover:text-white transition duration-500" />
            </div>
            <h5 className="mt-2 text-lg font-semibold">{tech.name}</h5>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
