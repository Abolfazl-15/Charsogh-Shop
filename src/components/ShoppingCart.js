import React from "react";
import { useShop } from "./Context/shopContext";
import { motion, AnimatePresence } from "framer-motion";
import { FiTrash2, FiPlus, FiMinus } from "react-icons/fi";

const cartVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      delay: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
  },
};

const ShoppingCart = () => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    deleteFromCart,
    totalItems,
    totalPrice,
  } = useShop();

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cartVariants}
      className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
    >
      <div className="p-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 flex items-center">
          سبد خرید
          <span className="mr-2 bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
            {totalItems} عدد
          </span>
        </h2>
      </div>

      <div className="p-4">
        <AnimatePresence>
          {cartItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 text-gray-500"
            >
              سبد خرید شما خالی است
            </motion.div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="flex flex-col sm:flex-row gap-4 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg border border-gray-200"
                      onError={(e) => {
                        e.target.src =
                          "https://via.placeholder.com/100?text=Product";
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                          {item.price.toLocaleString()} تومان
                        </p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => deleteFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                        aria-label="Remove item"
                      >
                        <FiTrash2 size={18} />
                      </motion.button>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <FiMinus size={16} />
                        </motion.button>
                        <span className="px-3 text-gray-700">
                          {item.quantity}
                        </span>
                        <motion.button
                          whileTap={{ scale: 0.9 }}
                          onClick={() => addToCart(item)}
                          className="px-2 py-1 bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <FiPlus size={16} />
                        </motion.button>
                      </div>
                      <span className="font-medium text-gray-800">
                        {(item.price * item.quantity).toLocaleString()} تومان
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {cartItems.length > 0 && (
          <motion.div layout className="mt-6 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-700">جمع کل:</span>
              <span className="font-bold text-lg text-gray-800">
                {totalPrice.toLocaleString()} تومان
              </span>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              پرداخت و تکمیل سفارش
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ShoppingCart;
