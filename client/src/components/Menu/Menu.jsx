/*import React from "react";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className="flex justify-center mt-4">
              <img
                src="./Writtika_pic.jpeg"
                alt="profile pic"
                className="rounded-full h-36 w-36"
              />
            </div>
          </Zoom>
          <Fade left>
            <div className="text-white mt-6 space-y-4 pl-6">
              {[
                { to: "home", icon: <FcHome />, label: "Home" },
                { to: "about", icon: <FcAbout />, label: "About" },
                { to: "education", icon: <FcReadingEbook />, label: "Education" },
                { to: "techstack", icon: <FcBiotech />, label: "Tech Stack" },
                { to: "projects", icon: <FcVideoProjector />, label: "Projects" },
                { to: "work", icon: <FcPortraitMode />, label: "Work Experience" },
                { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
              ].map(({ to, icon, label }) => (
                <div key={to} className="flex items-center space-x-3 cursor-pointer hover:text-[#f29f67]">
                  <Link to={to} spy smooth offset={-100} duration={100} className="flex items-center space-x-2">
                    {icon}
                    <span>{label}</span>
                  </Link>
                </div>
              ))}
            </div>
          </Fade>
        </>
      ) : (
        <div className="mt-6 flex flex-col items-center space-y-4 text-white">
          {[
            { to: "home", icon: <FcHome /> },
            { to: "about", icon: <FcAbout /> },
            { to: "education", icon: <FcReadingEbook /> },
            { to: "techstack", icon: <FcBiotech /> },
            { to: "projects", icon: <FcVideoProjector /> },
            { to: "work", icon: <FcPortraitMode /> },
            { to: "contact", icon: <FcBusinessContact /> },
          ].map(({ to, icon }) => (
            <Link key={to} to={to} spy smooth offset={-100} duration={100} className="cursor-pointer hover:text-[#f29f67]">
              {icon}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;*/


import React from "react";
import Zoom from "react-reveal/Zoom";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const Menu = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
           <Zoom>
            <div className="flex justify-center mt-4  ">
              <img
                src="./Writtika_pic.jpeg"
                alt="profile pic"
                className="rounded-full h-36 w-36"
              />
            </div>
            </Zoom>
         
            <div className="text-white mt-6 space-y-4 pl-6">
              {[
                { to: "home", icon: <FcHome />, label: "Home" },
                { to: "about", icon: <FcAbout />, label: "About" },
                { to: "education", icon: <FcReadingEbook />, label: "Education" },
                { to: "techstack", icon: <FcBiotech />, label: "Tech Stack" },
                { to: "projects", icon: <FcVideoProjector />, label: "Projects" },
                { to: "work", icon: <FcPortraitMode />, label: "Work Experience" },
                { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
              ].map(({ to, icon, label }) => (
                <div key={to} className="flex items-center space-x-3 cursor-pointer hover:text-[#f29f67]">
                  <Link to={to} spy smooth offset={-100} duration={100} className="flex items-center space-x-2">
                    {icon}
                    <span>{label}</span>
                  </Link>
                </div>
              ))}
            </div>
         
        </>
      ) : (
        <div className="mt-6 flex flex-col items-center space-y-4 text-white">
          {[
            { to: "home", icon: <FcHome /> },
            { to: "about", icon: <FcAbout /> },
            { to: "education", icon: <FcReadingEbook /> },
            { to: "techstack", icon: <FcBiotech /> },
            { to: "projects", icon: <FcVideoProjector /> },
            { to: "work", icon: <FcPortraitMode /> },
            { to: "contact", icon: <FcBusinessContact /> },
          ].map(({ to, icon }) => (
            <Link key={to} to={to} spy smooth offset={-100} duration={100} className="cursor-pointer hover:text-[#f29f67]">
              {icon}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};

export default Menu;

