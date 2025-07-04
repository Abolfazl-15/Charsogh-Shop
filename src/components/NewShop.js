import React from "react";
import { ShopProvider } from "./Context/shopContext";
import NewProductSlider from "./NewProductSlider";

import { motion } from "framer-motion";

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
      duration: 0.5,
    },
  },
};

function NewShop() {
  return (
    <ShopProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="xl:relative xl:top-[100px] relative top-[50px] h-96 bg-gray-100 p-4 md:p-8"
      >
        <motion.div variants={pageVariants} className="max-w-7xl mx-auto">
          <NewProductSlider />
        </motion.div>
      </motion.div>
    </ShopProvider>
  );
}

export default NewShop;
