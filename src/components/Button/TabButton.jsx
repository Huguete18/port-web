import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#adb7be]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        className="h-1 bg-primary-500 mt-2 mr-3"
        variants={variants}
        animate={active ? "active" : "default"}
      ></motion.div>
    </button>
  );
};

export default TabButton;
