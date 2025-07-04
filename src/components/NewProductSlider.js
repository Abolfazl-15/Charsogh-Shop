import React, { useState } from "react";
import { useShop } from "./Context/shopContext";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { motion } from "framer-motion";

import clothes1 from "../Images/model.png";
import clothes2 from "../Images/model2.png";
import clothes3 from "../Images/model3.png";
import clothes4 from "../Images/model4.png";
import pirhan from "../Images/pirhan.jfif";
import Tshirt from "../Images/Tshert.jfif";
import Kot from "../Images/kot.jpg";
import pants from "../Images/Pnts.jfif";

// انیمیشن‌ها
const sliderVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const productVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
  hover: {
    y: -5,
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

// داده‌های محصولات
const products = [
  {
    id: 5,
    name: " تی شرت مردانه",
    price: 300000,
    image: Tshirt,
  },
  {
    id: 6,
    name: " کت و شلوار مردانه",
    price: 4000000,
    image: Kot,
  },
  {
    id: 7,
    name: " شلوار راحتی مردانه",
    price: 450000,
    image: pants,
  },
  {
    id: 8,
    name: " پیراهن مردانه سفید",
    price: 200000,
    image: pirhan,
  },
  {
    id: 1,
    name: "  مانتو مشکی",
    price: 450000,
    image: clothes1,
  },
  {
    id: 2,
    name: " پالتو زنانه",
    price: 800000,
    image: clothes2,
  },
  {
    id: 3,
    name: "مانتو مشکی طرح مهر ",
    price: 250000,
    image: clothes3,
  },
  {
    id: 4,
    name: "مانتو سبز",
    price: 370000,
    image: clothes4,
  },
];

const NewProductSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { addToCart } = useShop();

  // تنظیمات اسلایدر
  const itemsPerPage = 4;
  const totalSlides = Math.ceil(products.length / itemsPerPage);

  // محاسبه محصولات قابل نمایش در اسلاید فعلی
  const visibleProducts = products.slice(
    currentSlide * itemsPerPage,
    (currentSlide + 1) * itemsPerPage
  );

  // رفتن به اسلاید بعدی
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // رفتن به اسلاید قبلی
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={sliderVariants}
      className="mb-12"
    >
      <div className="relative">
        {/* نمایش محصولات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              variants={productVariants}
              whileHover="hover"
              className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300?text=Product+Image";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-bold text-gray-700">
                    {product.price.toLocaleString()} تومان
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => addToCart(product)}
                    className="px-3 py-1 bg-orange text-white rounded-lg text-sm hover:bg-yellow-600 transition-colors"
                  >
                    افزودن
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* دکمه‌های ناوبری - دسکتاپ */}
        {products.length > itemsPerPage && (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 items-center justify-center"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={24} className="text-gray-700" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 items-center justify-center"
              aria-label="Next slide"
            >
              <FiChevronRight size={24} className="text-gray-700" />
            </motion.button>
          </>
        )}

        {/* دکمه‌های ناوبری - موبایل */}
        {products.length > itemsPerPage && (
          <div className="sm:hidden flex justify-center mt-6 space-x-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="bg-white p-2 rounded-full shadow border border-gray-200 hover:bg-gray-50"
              aria-label="Previous slide"
            >
              <FiChevronLeft size={20} />
            </motion.button>
            <div className="flex items-center space-x-1">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="bg-white p-2 rounded-full shadow border border-gray-200 hover:bg-gray-50"
              aria-label="Next slide"
            >
              <FiChevronRight size={20} />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default NewProductSlider;
