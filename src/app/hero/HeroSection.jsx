"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { Button, ButtonGroup } from "@nextui-org/react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const HeroSection = () => {
  const handleDownload = () => {
    const pdfUrl = "/pdf/CV_Huguet_Sergi.pdf";
    const fileName = pdfUrl.substring(pdfUrl.lastIndexOf("/") + 1);
    saveAs(pdfUrl, fileName);
  };
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-slate-800 dark:text-slate-200 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, {"I'm"}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Sergi Huguet",
                1000,
                "Web Developer",
                1000,
                "UI/UX Designer",
                1000,
                "Cybersecurity",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-slate-800 dark:text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
            {"I'm"} a passionate web develop and Cybersecurity.
          </p>
          <ButtonGroup>
            <Button color="primary" variant="shadow">
              Hire Me
            </Button>
            <Button color="primary" variant="ghost">
              <span onClick={handleDownload}>Download CV</span>
            </Button>
          </ButtonGroup>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative z-0 py-4">
            <Card className="py-4 bg-slate-400 dark:bg-cyan-950">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-cyan-950 dark:text-cyan-500">
                  Sergi Huguet
                </p>
                <small className="text-slate-800 dark:text-slate-400">
                  24 Years
                </small>
                <h4 className="font-bold text-large text-cyan-950 dark:text-cyan-500">
                  Frontend Developer
                </h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Card background"
                  className="object-cover rounded-xl"
                  src="/image/hero-sergi.png"
                  width={300}
                  height={300}
                />
              </CardBody>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
