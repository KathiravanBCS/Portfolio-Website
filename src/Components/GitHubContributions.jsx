import React, { useState, useEffect } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { subDays } from "date-fns";
import { motion } from "framer-motion";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME;
const GITHUB_ACCESS_TOKEN = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

const GitHubContributions = () => {
  const [contributions, setContributions] = useState([]);

  useEffect(() => {
    const fetchContributions = async () => {
      const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                weeks {
                  contributionDays {
                    date
                    contributionCount
                  }
                }
              }
            }
          }
        }
      `;
      
      try {
        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        const rawContributions = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
        const formattedData = rawContributions.flatMap((week) => week.contributionDays);
        setContributions(formattedData);
      } catch (error) {
        console.error("Error fetching GitHub contributions:", error);
      }
    };

    fetchContributions();
  }, []);

  return (
    <motion.div whileHover={{ scale: 1.02, rotate: 0.1 }} transition={{ duration: 0.5 }} className="max-w-5xl p-9 mx-auto border-[#FAF7E7] border-[1px] mt-6 text-[#FFC20D] rounded-sm bg-[#242424]">
      <h2 className="text-center text-2xl font-semibold mb-4">GitHub Contributions</h2>
      <CalendarHeatmap
        startDate={subDays(new Date(), 365)}
        endDate={new Date()}
        values={contributions.map((day) => ({ date: day.date, count: day.contributionCount }))}
        classForValue={(value) => (!value ? "color-empty" : `color-scale-${Math.min(value.count, 4)}`)}
      />
    </motion.div>
  );
};

export default GitHubContributions;
