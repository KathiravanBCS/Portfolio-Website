import React, { useState } from "react";
import { FaBars, FaTimes, FaCode } from "react-icons/fa";
import { Link } from "react-router-dom"; // Changed from react-scroll
import { motion, useScroll } from "framer-motion";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <div className="absolute w-full z-50">
      {/* Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX: scrollYProgress,
          transition: "transform 0.2s ease-linear",
        }}
        className="h-1 absolute top-0 left-0 origin-left w-full bg-[#FFC20D]"
      ></motion.div>

      <header className="bg-[#121212] border-b-[0.2px] border-b-[#1c1c1c] shadow-md shadow-[#1c1c1c]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Logo Section with animated icon */}
            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2
                }}
                whileHover={{ 
                  rotate: 360,
                  transition: { duration: 0.8, ease: "easeInOut" }
                }}
                className="flex-shrink-0"
              >
                <FaCode className="text-[#FFC20D] text-2xl" />
              </motion.div>
              <div className="flex-shrink-0">
                <motion.p
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-gradient-to-r from-[#FFD557] to-[#FFC20D] bg-clip-text text-transparent text-2xl font-bold cursor-pointer"
                >
                  KATHIRAVAN V
                </motion.p>
              </div>
            </Link>

            {/* Navigation Menu */}
            <nav className="hidden md:flex space-x-10 text-lg">
              <Link to="/" className="transition-all cursor-pointer text-[#FAFAF9] font-semibold hover:text-[#FFC20D]">
                About
              </Link>
              <Link to="/skills" className="transition-all cursor-pointer text-[#FAFAF9] font-semibold hover:text-[#FFC20D]">
                Skills
              </Link>
              <Link to="/projects" className="transition-all cursor-pointer text-[#FAFAF9] font-semibold hover:text-[#FFC20D]">
                Projects
              </Link>
              <Link to="/experience" className="transition-all cursor-pointer text-[#FAFAF9] font-semibold hover:text-[#FFC20D]">
                Experience
              </Link>
              <Link to="/contact" className="transition-all cursor-pointer text-[#FAFAF9] font-semibold hover:text-[#FFC20D]">
                Contact
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white focus:outline-none"
              >
                <motion.div
                  initial={{ rotate: 0, opacity: 1 }}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0, opacity: 1 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  {isMobileMenuOpen ? (
                    <FaTimes className="h-6 w-6" />
                  ) : (
                    <FaBars className="h-6 w-6" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-5 space-y-4">
              <Link to="/" className="block text-[#FAFAF9] font-semibold text-lg hover:text-[#FFC20D] transition-all cursor-pointer text-center">
                About
              </Link>
              <Link to="/skills" className="block text-[#FAFAF9] font-semibold text-lg hover:text-[#FFC20D] transition-all cursor-pointer text-center">
                Skills
              </Link>
              <Link to="/projects" className="block text-[#FAFAF9] font-semibold text-lg hover:text-[#FFC20D] transition-all cursor-pointer text-center">
                Projects
              </Link>
              <Link to="/experience" className="block text-[#FAFAF9] font-semibold text-lg hover:text-[#FFC20D] transition-all cursor-pointer text-center">
                Experience
              </Link>
              <Link to="/contact" className="block text-[#FAFAF9] font-semibold text-lg hover:text-[#FFC20D] transition-all cursor-pointer text-center">
                Contact
              </Link>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;