import OrbitingCircles from "./orbiting-circles";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

export function Circle() {
  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden rounded-lg ">
      {/* <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Circles
      </span> */}
      {<FaGithub />}

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={80}
      >
        <IoLogoYoutube color="#FF0000" size={20} />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <FaXTwitter size={20} />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        reverse
      >
        <FaLinkedin size={40} color="#0072b1" />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] border-none bg-transparent"
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <FaGithub size={40} />
      </OrbitingCircles>
    </div>
  );
}
