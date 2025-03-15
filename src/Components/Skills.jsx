import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiBootstrap, SiExpress, SiMysql, SiGithub } from "react-icons/si";
import { AiOutlineCode } from "react-icons/ai";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, bgColor: "#E34F26" },
  { name: "CSS", icon: <FaCss3Alt />, bgColor: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, bgColor: "#F7DF1E" },
  { name: "Bootstrap", icon: <SiBootstrap />, bgColor: "#7952B3" },
  { name: "React.js", icon: <FaReact />, bgColor: "#61DAFB" },
  { name: "Node.js", icon: <FaNodeJs />, bgColor: "#68A063" },
  { name: "Express.js", icon: <SiExpress />, bgColor: "black" },
  { name: "MySQL", icon: <SiMysql />, bgColor: "#4479A1" },
  { name: "Git", icon: <FaGitAlt />, bgColor: "#F1502F" },
  { name: "GitHub", icon: <SiGithub />, bgColor: "black" },
  { name: "WordPress", icon: <FaWordpress />, bgColor: "#21759B" },
];

const Skills = () => {
  return (
    <div id="Skills" className="min-h-screen flex flex-col justify-center items-center">
      {/* Header */}
      <h1 className="text-3xl md:text-5xl text-center mb-7 md:mb-9 mx:mt-10 font-semibold text-[#FFC20D]">
        Skills
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block ml-2"
        >
          <AiOutlineCode className="text-[#FFC20D]" />
        </motion.span>
      </h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 p-6 md:px-24 w-full max-w-7xl">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="flex flex-col items-center bg-[#1c1c1c]/70 hover:shadow-amber-100/5 hover:bg-[#FFD557]/10 border-[#FAF7E7] border-1 justify-center p-4 rounded-xl shadow-lg cursor-pointer"
          >
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, repeatType: "loop", duration: 1, ease: "easeInOut" }}
              className="text-white text-4xl"
              style={{ color: skill.bgColor }}
            >
              {skill.icon}
            </motion.div>
            <p className="text-white mt-2 font-semibold">{skill.name}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Skills;