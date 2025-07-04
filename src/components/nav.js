import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Nav = () => {
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
      className="navigation"
    >
      <button className="hidden hover:shadow-lg hover:shadow-orange md:block rounded-md bg-orange cursor-pointer w-[152px] h-[52px] shadow-xl shadow-orange relative top-24 left-28 text-white  md:top-[45px] md:left-[1080px]">
        <Link to="/login">ورورد</Link>
      </button>
      <ul className="hidden md:flex flex-row gap-3 justify-center md:mt-1 md:relative left-14 md:gap-6 mr-5 xl:gap-14 md:justify-end xl:mr-64 ">
        <Link to="/Articles">
          <li className="text-primary cursor-pointer hover:text-orange">
            مقالات
          </li>
        </Link>
        <Link to="/ContactUs">
          {" "}
          <li className="text-primary cursor-pointer hover:text-orange ">
            تماس با ما
          </li>
        </Link>

        <Link to="/AboutUs">
          {" "}
          <li className="text-primary cursor-pointer hover:text-orange">
            درباره ما
          </li>
        </Link>

        <Link to="/Cart">
          <li className="text-primary cursor-pointer hover:text-orange">
            سبد خرید
          </li>
        </Link>

        <li className="text-primary cursor-pointer hover:text-orange">
          <Link to="/">خانه</Link>
        </li>
      </ul>
      <img
        className="w-[123px] h-[84px] relative top-0 left-60 xl:top-[-40px] xl:left-[80px] xl:w-[173px] xl:h-[104px] md:w-[173px] md:h-[104px] md:top-[-45px]"
        src={Logo}
      />
      <Link to="/Cart">
        <button className="shadow-lg shadow-orange md:hidden w-10 h-10 bg-orange rounded-md hover:shadow-lg hover:shadow-orange relative left-20 top-[-68px] ">
          <FontAwesomeIcon className="text-white" icon={faShoppingCart} />
        </button>
      </Link>
    </motion.div>
  );
};

export default Nav;
