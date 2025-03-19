
/*import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

//import Menus from "../Menus/Menus";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  //change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="sidebar-section flex">
        <div className={toggle ? "sidebar-toggle sidebar" : "sidebar" }>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? (
                <AiOutlineDoubleLeft  className="text-[20px]" />
              ) : (
                <AiOutlineDoubleRight  />
              )}
            </p>
          </div>
         {/*<Menus toggle={toggle} />*/
       /* </div>
        <div className="container">
          <Home />
        </div>
      </div>
    </>
  );
};

export default Layout;*/

import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

import Menu from "../Menu/Menu";

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change toggle state
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex bg-black h-[350px] ">
      <div
        className={`h-screen bg-[#1e1e2c] fixed transition-all duration-300 ${toggle ? "w-[200px]" : "w-[90px]"}`}
      >
        <div className="flex justify-end cursor-pointer p-2">
          <p onClick={handleToggle} className="bg-[#f29f67] p-2 rounded">
            {toggle ? <AiOutlineDoubleLeft size={20} className="text-white" /> : <AiOutlineDoubleRight size={20} className="text-white" />}
          </p>
        </div>
       <Menu toggle={toggle} />
      </div>
      <div className="ml-[90px] transition-all duration-300 md:ml-[200px] w-full ">
        <Home />
      </div>
    </div>
  );
};

export default Layout;
