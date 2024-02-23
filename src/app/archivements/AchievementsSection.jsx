"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Card, CardBody } from "@nextui-org/react";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "5",
  },
];

const AchievementsSection = () => {
  return (
    <Card className="mt-4 py-8 px-16 flex flex-col sm:flex-row items-center justify-between bg-slate-200 dark:bg-cyan-950">
      <CardBody className="flex flex-col sm:flex-row justify-around">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-cyan-950 dark:text-cyan-300 text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-cyan-950 dark:text-cyan-300 text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-slate-800 dark:text-slate-400 text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </CardBody>
    </Card>
  );
};
export default AchievementsSection;
