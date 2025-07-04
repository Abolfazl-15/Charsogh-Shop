import React from "react";
import { Link } from "react-router-dom";
import section7 from "../Images/section 7.png";
import { motion } from "framer-motion";

const Section7 = () => {
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
      className="flex justify-center"
    >
      <Link to="/shop">
        <img
          src={section7}
          alt="لباس های زنانه و مردانه"
          className="xl:h-96 xl:mt-[-800px] relative top-[1050px]"
        />
      </Link>
    </motion.div>
  );
};

export default Section7;
