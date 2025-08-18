import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const NotificationModal = ({ show, type, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
          className={`fixed top-10 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-sm p-5 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20 flex items-center justify-center font-semibold text-lg ${
            type === "success"
              ? "bg-green-500/20 text-white"
              : "bg-red-500/20 text-white"
          }`}
        >
          <span className="mr-3 text-2xl">
            {type === "success" ? "✅" : "❌"}
          </span>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationModal;
