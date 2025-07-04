import React from "react";
import { ShopProvider } from "./Context/shopContext";
import ProductSlider from "./ProductSlider";

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

function Shop() {
  return (
    <ShopProvider>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={pageVariants}
        className="xl:relative xl:-top-[800px] relative top-[350px] h-1/3 bg-gray-100 p-4 md:p-8"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8 text-gray-800"
        >
          انواع لباس های زنانه و مردانه
        </motion.h1>

        <motion.div variants={pageVariants} className="max-w-7xl mx-auto">
          <ProductSlider />
        </motion.div>
      </motion.div>
    </ShopProvider>
  );
}

export default Shop;
