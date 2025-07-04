import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import tittle from "../Images/tittle.png";
import tittle1 from "../Images/nav-img.png";
import tittle2 from "../Images/nav-img2.png";
import tittle3 from "../Images/nav-img3.png";
import tittle4 from "../Images/nav-img4.png";
import section1 from "../Images/section 1.jpg";
function Header() {
  const sliderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sliderVariants}
      className="w-80 flex flex-col justify-center xl:w-[900px] md:mt-[-160px] md:mr-auto md:ml-auto"
    >
      <img
        src={tittle1}
        className="w-72 relative left-10 top-8 xl:w-[426px] xl:h-[150px] xl:top-56 xl:left-56"
      />
      <img
        src={tittle2}
        className="relative top-20 w-72 left-12 xl:w-[492px] xl:h-[756px] xl:left-[-200px]"
      />
      <img
        src={tittle}
        className="relative top-20 w-72 left-12 xl:w-[292px] xl:h-[456px] xl:left-[290px] xl:top-[-520px]"
      />
      <img
        src={tittle3}
        className="relative top-24 w-52 left-[90px] xl:w-[372px] xl:h-[756px] xl:left-[670px] xl:top-[-1135px]"
      />
      <img
        src={tittle4}
        className="w-72 relative left-10 top-32 xl:w-[426px] xl:h-[150px] xl:top-[-1280px] xl:left-56"
      />
      <Link to="/shop">
        <div className="flex flex-row justify-center gap-8 relative top-52 left-8 xl:top-[-1100px] xl:left-[-10px] xl:text-xl">
          <span className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer transition-all duration-200">
            بچه گانه
          </span>
          <span className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer transition-all duration-200">
            مردانه
          </span>
          <span className="pb-1 border-b-2 border-transparent hover:border-black cursor-pointer transition-all duration-200">
            زنانه
          </span>
        </div>
      </Link>
      <Link to="/shop">
        <img
          className="relative top-64 left-[30px] xl:top-[-1000px] xl:left-1"
          src={section1}
        />
      </Link>
    </motion.div>
  );
}

export default Header;
