import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUp, ArrowDown } from "lucide-react";
import { useState } from "react";

import PicArticles from "../Images/pic.png";
import PicArticles2 from "../Images/Blogpost 1.png";
import PicArticles3 from "../Images/Blogpost 2.png";
import PicArticles4 from "../Images/blogpost3.png";

const Articles = () => {
  const SliderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <motion.div
      initial="hidden"
      variants={SliderVariants}
      animate="visible"
      className="relative xl:top-[900px] top-[1200px]"
    >
      <h2 className="text-center text-orange text-bold">مقالات</h2>
      <Link to="https://learning.roshaprint.com/colorology/pantone-2022-autumn/">
        <div className="flex flex-col items-center relative xl:top-24 xl:left-[800px] left-12 xl:w-[400px] w-[310px] top-10 gap-3">
          <img
            src={PicArticles}
            className="xl:w-80 xl:h-64 w-64 h-64 rounded-md"
          />
          <h5 className="text-black text-sm  xl:text-lg font-medium">
            رونمایی شرکت پروتون از 15 رنگ پاییزه در سال 2022
          </h5>
          <p className="text-gray-200 text-center xl:text-left">
            <FontAwesomeIcon icon={faCalendar} />
            1404 14آذر
          </p>
        </div>
      </Link>
      <Link to="https://www.topickshop.com/how-to-wash-socks-correctly/">
        <div className="relative xl:-top-[150px] left-12 xl:left-1 xl:w-[600px] w-[310px] top-[100px]">
          <div className="flex flex-col xl:flex-row-reverse text-center items-center gap-3">
            <img
              src={PicArticles2}
              className="xl:w-28 xl:h-28 rounded-md w-64 h-64"
            />
            <h5 className="relative text-sm xl:top-0 xl:text-lg font-medium text-black">
              بهترین عینک آفتابی های سال 2023
            </h5>
            <p className="text-gray-200 text-center xl:relative right-4 xl:top-6 xl:text-left">
              <FontAwesomeIcon icon={faCalendar} />
              1404 25آبان
            </p>
          </div>
        </div>
      </Link>
      <Link to="https://rcooshop.com/blog/2023-sunglasses/">
        <div className="relative xl:-top-[400px] left-12 xl:left-1 xl:w-[600px] w-[310px] top-[100px]">
          <div className="flex flex-col xl:flex-row-reverse text-center items-center gap-3">
            <img
              src={PicArticles3}
              className="xl:w-28 xl:h-28 rounded-md w-64 h-64"
            />
            <h5 className="relative text-sm xl:top-0 xl:text-lg font-medium text-black">
              چگونه جوراب خود را بشوییم؟
            </h5>
            <p className="text-gray-200 text-center xl:relative right-4 xl:top-6 xl:text-left">
              <FontAwesomeIcon icon={faCalendar} />
              1404 21مرداد
            </p>
          </div>
        </div>
      </Link>
      <Link to="https://pooshaknovin.com/22-%D8%AA%D8%B1%DA%A9%DB%8C%D8%A8-%D8%B1%D9%86%DA%AF-%D8%AC%D8%B0%D8%A7%D8%A8-%D8%A8%D8%B1%D8%A7%DB%8C-%D8%B3%D8%AA-%DA%A9%D8%B1%D8%AF%D9%86-%D8%A8%D8%A7-%D8%B1%D9%86%DA%AF-%D8%A2%D8%A8%DB%8C/">
        <div className="relative xl:-top-[230px] left-14 xl:left-1 xl:w-[600px] w-[310px] top-[100px]">
          <div className="flex flex-col xl:flex-row-reverse text-center items-center gap-3">
            <img
              src={PicArticles4}
              className="xl:w-28 xl:h-28 rounded-md w-64 h-64"
            />
            <h5 className="relative text-sm xl:top-0 xl:text-lg font-medium text-black">
              رنگ ابی را با چه رنگ هایی بپوشیم؟
            </h5>
            <p className="text-gray-200 text-center xl:relative right-4 xl:top-6 xl:text-left">
              <FontAwesomeIcon icon={faCalendar} />
              1403 11دی
            </p>
          </div>
        </div>
      </Link>
      <button
        className=" flex flex-row relative top-24 left-44 xl:-top-52 xl:left-52 "
        onClick={toggleButton}
      >
        {isOpen ? <ArrowDown /> : <ArrowUp />}
        بیشتر
      </button>
    </motion.div>
  );
};

export default Articles;
