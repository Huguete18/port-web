"use client";
import React from "react";
import { motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const colors = ["primary"];

let tabs = [
  {
    id: "skills",
    label: "Skills",
    content: (
      <ul className="list-disc pl-4">
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Bootstrap</li>
        <li>Vue</li>
        <li>React</li>
        <li>Cybersecurity</li>
      </ul>
    ),
  },
  {
    id: "education",
    label: "Education",
    content: (
      <ul className="list-disc pl-4">
        <li>CEPI-BASE Frontend Academy, Barcelona</li>
        <li>
          Higher Education in Vocational Training at Jesuïtes El Clot, Barcelona
        </li>
      </ul>
    ),
  },
  {
    id: "certifications",
    label: "Certifications",
    content: (
      <ul className="list-disc pl-4">
        <li>Cybersecurity Specialist in Pentesting, CEPI-BASE Academy </li>
        <li>Cybersecurity Essentials Specialist, CEPI-BASE Academy</li>
        <li>Senior Technician in Java with Android, CEPI-BASE Academy</li>
        <li>
          Senior Technician in Web Application Development, Jesuïtes El Clot
        </li>
        <li>
          Senior Technician in Computer Systems and Network Administration,
          Jesuïtes El Clot
        </li>
        <li>
          Senior Technician in Applications and Development with Python,
          CEPI-BASE Academy
        </li>
      </ul>
    ),
  },
  {
    id: "languaje",
    label: "Languaje",
    content: (
      <ul className="list-disc pl-4">
        <li>Catalan</li>
        <li>Spanish</li>
        <li>English</li>
      </ul>
    ),
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="text-slate-800 dark:text-[#adb7be]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <div className="p-3 z-0">
          <AutoplaySlider
            className="flex justify-center items-center rounded-lg overflow-hidden"
            play={true}
            cancelOnInteraction={false}
            interval={6000}
          >
            <div
              data-src="/image/about-cybersecurity.png"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "20px",
                  left: "20px",
                  textAlign: "left",
                }}
              >
                <h1 className="text-white text-4xl font-semibold">
                  Cybersecurity
                </h1>
                <p className="text-white text-2xl font-medium">
                  We implement robust security protocols to protect data.
                </p>
              </div>
            </div>
            <div
              data-src="/image/about-development.png"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "20px",
                  left: "20px",
                  textAlign: "left",
                }}
              >
                <h1 className="text-white text-3xl font-semibold">
                  Web Development
                </h1>
                <p className="text-white text-2xl font-medium">
                  We create interactive and attractive web experiences for
                  users.
                </p>
              </div>
            </div>
            <div
              data-src="/image/about-python.png"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  position: "absolute",
                  color: "white",
                  bottom: "20px",
                  left: "20px",
                  textAlign: "left",
                }}
              >
                <h1 className="text-white text-3xl font-semibold">Python</h1>
                <p className="text-white text-2xl font-medium">
                  We generate efficient solutions with Python, a versatile
                  programming language.
                </p>
              </div>
            </div>
          </AutoplaySlider>
        </div>
        <div className="mt-10 md:mt-3 text-left flex flex-col h-full">
          <Card className="bg-slate-200 dark:bg-cyan-950 text-cyan-950 dark:text-cyan-300">
            <CardHeader>
              <h2>About Me</h2>
            </CardHeader>
            <CardBody>
              <p>
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Redux, Node.js, Express,
                PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner
                and I am always looking to expand my knowledge and skill set. I
                am a team player and I am excited to work with others to create
                amazing applications.
              </p>
            </CardBody>
          </Card>
          <div className="flex w-full flex-col mt-4">
            {colors.map((color) => (
              <Tabs
                key={color}
                color={color}
                aria-label="Tabs colors"
                items={tabs}
              >
                {(item) => (
                  <Tab key={item.id} title={item.label}>
                    <Card className="bg-slate-200 dark:bg-cyan-950 text-cyan-950 dark:text-cyan-300">
                      <CardBody>{item.content}</CardBody>
                    </Card>
                  </Tab>
                )}
              </Tabs>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
