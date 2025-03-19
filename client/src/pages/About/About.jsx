/*import React from "react";
import Jump from "react-reveal/Jump";

const About = () => {
  return (
    <Jump>
      <div className="my-8 p-5 ml-[200px] shadow-md dark:shadow-none dark:bg-black" id="about">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg w-full h-[400px] object-cover"
              src="./Writtika_pic.jpeg"
              alt="profile_pic"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-5">
            <h1 className="text-gray-600 dark:text-gray-400 font-cursive border-b-2 border-gray-600 dark:border-gray-400 pb-2">
              About Me
            </h1>
            <p className="text-justify p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              similique sequi velit aperiam totam quis iusto? Deleniti,
              similique id, sunt porro eos neque ab sit nihil culpa labore
              perferendis autem rem nostrum asperiores laudantium corrupti
              atque voluptatibus voluptatum officiis. Soluta alias autem,
              commodi quos suscipit modi maiores possimus! Placeat maiores
              assumenda inventore vel doloribus, sunt non. Sequi, corporis
              harum dolorem numquam, quis nesciunt atque tempore quae?
              Quibusdam consequatur quidem pariatur hic, ipsam eum beatae
              labore tempora quis fugit? Vitae, aperiam velit.
            </p>
          </div>
        </div>
      </div>
    </Jump>
  );
};

export default About;*/

/*import React from "react";
//import Jump from "react-reveal/Jump";

const About = () => {
  return (
   
      <div className="my-8 p-5 ml-[200px] shadow-md dark:shadow-none dark:bg-black" id="about">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg w-full h-[400px] object-cover"
              src="./Writtika_pic.jpeg"
              alt="profile_pic"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-5">
            <h1 className="text-gray-600 dark:text-gray-400 font-cursive border-b-2 border-gray-600 dark:border-gray-400 pb-2">
              About Me
            </h1>
            <p className="text-justify p-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              similique sequi velit aperiam totam quis iusto? Deleniti,
              similique id, sunt porro eos neque ab sit nihil culpa labore
              perferendis autem rem nostrum asperiores laudantium corrupti
              atque voluptatibus voluptatum officiis. Soluta alias autem,
              commodi quos suscipit modi maiores possimus! Placeat maiores
              assumenda inventore vel doloribus, sunt non. Sequi, corporis
              harum dolorem numquam, quis nesciunt atque tempore quae?
              Quibusdam consequatur quidem pariatur hic, ipsam eum beatae
              labore tempora quis fugit? Vitae, aperiam velit.
            </p>
          </div>
        </div>
      </div>
   
  );
};

export default About;*/

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="  pl-10 my-8 p-5 ml-[200px] shadow-md dark:shadow-none dark:bg-black"
      id="about"
    >
      {/* Your content */}
     
        <div className="pt -2 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              className="rounded-lg w-full h-[600px] object-cover"
              src="./Writtika_pic.jpeg"
              alt="profile_pic"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center text-center md:text-left px-5">
            <h1 className="text-gray-600 dark:text-gray-400 font-cursive border-b-2 border-gray-600 dark:border-gray-400 pb-2">
              About Me
            </h1>
            <p className="text-justify p-5">
            Hi, I'm Writtika Mitra, a passionate 4th-year Computer Science and Engineering student with a strong foundation in Java, C, and full-stack development using the MERN stack. I am also skilled in Salesforce and always eager to explore new technologies and challenges.

Beyond coding, my strengths lie in effective communication and leadership, enabling me to collaborate seamlessly in teams and drive projects toward success. I am constantly learning and evolving, aiming to build innovative and user-friendly solutions.

Feel free to explore my work, and let's connect!
            </p>
          </div>
        </div>
     
      
    </motion.div>
  );
};

export default About

