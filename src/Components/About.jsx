import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHandPeace } from "react-icons/fa6";

const text = "I am a Front End Developer.";

function About() {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, 100);
    } else if (isDeleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setIsDeleting(!isDeleting);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <div id="Home" className="flex flex-col md:flex-row items-center justify-center w-[70%] md:w-[70%] h-[120vh] md:h-[120vh] mx-auto pt-16 md:pt-24 pb-16">
      {/* Rotating Icons */}
      <motion.div
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full"
      >
        <FaReact className="text-[#FAF7E7]/10 text-3xl md:text-4xl" />
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        className="absolute top-32 left-1/3 flex justify-center items-center w-16 h-16 md:w-20 md:h-20 rounded-full"
      >
        <FaNodeJs className="text-[#FAF7E7]/10 text-3xl md:text-4xl" />
      </motion.div>

      {/* Profile Image Section */}
      <div className="mx-4 md:mx-8 md:flex-1 relative mt-0 order-1 md:order-2">
        {/* Background Layers */}
        <div className="absolute inset-0 mx-4 flex flex-col">
          <div className="bg-transparent w-full h-[15%]"></div>
          <div className="bg-radial from-[#FFD557] from-40% to-[#FFC20D] w-full h-[85%]"></div>
        </div>

        {/* Animated Border Behind Image */}
        <motion.div
          initial={{ x: [0, 15, 15, 0, 0], y: [0, 0, 10, 10, 0] }}
          animate={{ x: [0, 15, 15, 0, 0], y: [0, 0, 10, 10, 0] }}
          transition={{ duration: 5, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
          className="bg-transparent absolute inset-0 border-2 border-[#FAFAF9] z-0 mx-2"
        ></motion.div>

        {/* Image Wrapper */}
        <div className="relative z-20 flex justify-center items-center pt-4">
          <img
            src="/Profile_withoutbackground.png"
            alt="Kathiravan v"
            className="h-[200px] md:h-[300px] w-[200px] md:w-[300px] object-cover"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="md:flex-1 p-4 md:p-6 my-auto order-2 md:order-1">
        <h2 className="text-2xl md:text-3xl text-[#FAFAF9] font-semibold">
          Hello!!{" "}
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block ml-2"
          >
            <FaHandPeace className="text-[#ffd966]" />
          </motion.span>
        </h2>

        <h1 className="text-3xl md:text-4xl text-[#FAFAF9] font-bold my-2">
          My name is{" "}
          <span className="text-4xl md:text-5xl font-bold">Kathiravan</span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-[#FFD557] font-semibold my-3 text-lg md:text-xl font-mono"
        >
          {displayText}
          <span className="animate-blink">|</span>
        </motion.p>

        <p className="text-[#FFC20D] font-bold text-base md:text-lg">
          Dedicated web developer with a passion for crafting seamless user experiences. Proficient in HTML, CSS, and JavaScript, and REACT.JS eager to leverage skills in building responsive and dynamic websites.A quick learner with a keen eye for design, committed to staying updated with the latest technologies in the field.
        </p>
      </div>
    </div>
  );
}

export default About;