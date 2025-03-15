import React, { useState, useEffect } from "react";
import GitHubContributions from "./GitHubContributions";
import { FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;

function CodingStats() {
  const [githubData, setGitHubData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((response) => response.json())
      .then((data) => setGitHubData(data))
      .catch((error) => console.error("Error fetching GitHub data:", error));
  }, []);

  return (
    <div className="mx-8">
      <h1 className="text-3xl md:text-5xl text-center mb-9 mt-36 font-semibold text-[#FFC20D]">
        Coding Stats
        <motion.span animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="inline-block ml-2">
          <FaCode className="inline-block text-4xl md:text-5xl text-[#FFC20D]" />
        </motion.span>
      </h1>
      <div className="max-w-5xl mx-auto rounded-lg">
        {githubData ? (
          <div className="flex flex-col md:flex-row items-center gap-8">
            <motion.div whileHover={{ scale: 1.02, rotate: 0.1 }} transition={{ duration: 0.5 }} className="flex-1 px-4 py-3 bg-[#242424] border-[#FAF7E7] border-[1px] rounded-sm flex flex-col justify-center items-center gap-4">
              <img src={githubData.avatar_url} alt="GitHub Avatar" className="h-32 w-32 rounded-full" />
              <p className="text-xs text-[#FFD557] font-semibold">@{GITHUB_USERNAME}</p>
            </motion.div>
            <motion.img whileHover={{ scale: 1.02, rotate: 0.1 }} transition={{ duration: 0.5 }} src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=gruvbox`} alt="GitHub Stats" className="w-full md:w-auto" />
          </div>
        ) : (
          <p>Loading GitHub stats...</p>
        )}
        <GitHubContributions />
      </div>
    </div>
  );
}

export default CodingStats;