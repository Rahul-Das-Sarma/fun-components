import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaReact, FaSun } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

interface OrbitProps {
  duration: number;
  reverse?: boolean;
  icons: React.ReactNode[];
  size: number;
  className?: string;
}

const Orbit: React.FC<OrbitProps> = ({
  duration,
  reverse = false,
  icons,
  size,
  className,
}) => {
  const createOrbitVariants = () => ({
    rotate: {
      rotate: reverse ? -360 : 360,
      transition: {
        repeat: Infinity,
        duration,
        ease: "linear",
      },
    },
  });

  const createCounterRotation = () => ({
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
    <>
      <motion.div
        className={`absolute top-1/2 left-1/2 w-[${size}px] h-[${size}px] -ml-[${
          size / 2
        }px] -mt-[${
          size / 2
        }px] rounded-full border border-gray-400 origin-center ${className}`}
        animate="rotate"
        variants={createOrbitVariants()}
      >
        {icons.map((icon, index) => (
          <motion.div
            key={index}
            className={`absolute transform -translate-x-1/2 ${
              index % 2 === 0 ? "-top-3" : "-bottom-3"
            } left-1/2`}
            animate="rotate"
            variants={createCounterRotation()}
          >
            {icon}
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

const TestSolar: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {/* Sun */}
      <motion.div className="relative">
        <FaSun size={80} className="text-yellow-500" />

        {/* First Orbit */}
        <Orbit
          duration={20}
          icons={[
            <FaGithub
              key="github"
              size={30}
              className="dark:text-white text:black"
            />,
            <FaReact key="react" size={30} className="text-blue-500" />,
          ]}
          size={200}
        />

        {/* Second Orbit */}
        <Orbit
          duration={25}
          reverse
          icons={[
            <FaXTwitter
              key="twitter"
              size={35}
              className="dark:text-white text:black"
            />,
            <FaLinkedin key="linkedin" size={35} className="text-blue-500" />,
          ]}
          size={400}
        />
      </motion.div>
    </div>
  );
};

export default TestSolar;
