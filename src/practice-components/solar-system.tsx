import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SolarSystem: React.FC = () => {
  const createOrbitVariants = (duration: number, reverse?: "reverse") => ({
    rotate: {
      rotate: reverse ? -360 : 360,
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    },
  });

  const createCounterRotation = (duration: number, reverse?: "reverse") => ({
    rotate: {
      rotate: reverse ? 360 : -360,
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      {/* Sun */}
      <motion.div className="relative">
        <FaSun size={80} className="text-yellow-500" />

        {/* First Orbit - Contains Two Icons */}
        <motion.div
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-[200px] 
            h-[200px] 
            -ml-[100px] 
            -mt-[100px] 
            rounded-full 
            border 
        
            border-gray-400 
            origin-center
          "
          animate="rotate"
          variants={createOrbitVariants(20)}
        >
          <motion.div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            animate="rotate"
            variants={createCounterRotation(20)}
          >
            <FaGithub size={30} className="dark:text-white text:black" />
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
            animate="rotate"
            variants={createCounterRotation(20)}
          >
            <FaReact size={30} className="text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Second Orbit - Contains Two Icons */}
        <motion.div
          className="
            absolute 
            top-1/2 
            left-1/2 
            w-[400px] 
            h-[400px] 
            -ml-[200px] 
            -mt-[200px] 
            rounded-full 
            border 
            border-gray-400 
            origin-center
          "
          animate="rotate"
          variants={createOrbitVariants(25, "reverse")}
        >
          <motion.div
            className="absolute -top-3 left-1/2 transform -translate-x-1/2"
            animate="rotate"
            variants={createCounterRotation(25, "reverse")}
          >
            <FaXTwitter size={35} className="dark:text-white text:black" />
          </motion.div>

          <motion.div
            className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
            animate="rotate"
            variants={createCounterRotation(25, "reverse")}
          >
            <FaLinkedin size={35} className="text-blue-500" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SolarSystem;
