/*import React from "react";
import { useTheme } from "../../../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Writtika_Mitra_Resume..pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
//import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme( );
  // Handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };

  return (
    <div className="h-[300px] text-white pl-[150px]" id="home">
      <div
        className="flex items-center justify-center h-[50px] w-[50px] bg-[#1e1e1e] mt-5 fixed right-0 cursor-pointer rounded-l-lg z-10"
        onClick={handleTheme}
      >
        {theme === "light" ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
      </div>
      <div className="container mx-auto">
        <Fade right>
          <h2 className="p-2 pt-[70px]">Hi 👋 I'm Writtika </h2>
          <h1 className="text-[#e0b50f] p-2">
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "MERN Stack Developer!",
                  "React Native Developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>
        <Fade bottom>
          <div className="mt-5 flex space-x-4">
            <a
              className="bg-[#3b8ff3] text-white px-6 py-2 transition-all duration-300 hover:bg-white hover:text-[#3b8ff3] hover:w-[200px]"
              href="https://api.whatsapp.com/send?phone=1234567890"
              rel="noreferrer"
              target="_blank"
            >
              Hire Me
            </a>
            <a
              className="bg-[#f29f67] text-white px-6 py-2 transition-opacity duration-300 hover:opacity-80"
              href={Resume}
              download="Writtika.pdf"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;*/

import React from "react";
import { useTheme } from "../../../../context/ThemeContext"; // Ensure correct path
import Typewriter from "typewriter-effect";
import Resume from "../../assets/Writtika_Mitra_Resume..pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = () => {
  const {theme, setTheme } = useTheme(); // Destructure properly

  // Handle theme toggle
  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-[300px] text-white pl-[150px]" id="home">
      <div
        className="flex items-center justify-center h-[50px] w-[50px] bg-[#1e1e1e] mt-5 fixed right-0 cursor-pointer rounded-l-lg z-10"
        onClick={handleTheme}
      >
        {theme === "light" ? <BsFillMoonStarsFill size={30} /> : <BsFillSunFill size={30} />}
      </div>
      <div className="container mx-auto">
        <h2 className="p-2 pt-[70px] text-[40px] ">Hi 👋 I'm Writtika </h2>
        <h1 className="text-[#e0b50f] p-2 text-[25px]">
          <Typewriter
            options={{
              strings: [
                "FullStack Developer !!",
                "MERN Stack Developer !!",
                "Salesforce Developer !!",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>

        <div className="mt-5 flex space-x-4">
          {/*<a
            className="bg-[#3b8ff3] text-white px-6 py-2 transition-all duration-300 hover:bg-white hover:text-[#3b8ff3] hover:w-[200px]"
            href="https://api.whatsapp.com/send?phone=1234567890"
            rel="noreferrer"
            target="_blank"
          >
            Hire Me
          </a>*/}
          <a
            className="bg-[#f29f67] text-white px-6 py-2 transition-opacity duration-300 hover:opacity-80"
            href={Resume}
            download="Writtika_resume.pdf"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
