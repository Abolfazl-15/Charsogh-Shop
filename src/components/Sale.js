import { Link } from "react-router-dom";
import React from "react";
import main from "../Images/main.png";
import { motion } from "framer-motion";
function Sale() {
  const SlidersVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  };
  return (
    <motion.div initial="hidden" animate="visible" variants={SlidersVariants}>
      <Link to="/Shop">
        <img
          alt="لباس های زنانه و مردانه"
          src={main}
          className="xl:min-h-screen xl:-mt-[500px] mt-96"
        />
      </Link>
    </motion.div>
  );
}

export default Sale;
