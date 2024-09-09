"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import { Button, ButtonGroup } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";

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
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
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
          <p className="text-slate-800 dark:text-[#adb7be] text-base sm:text-lg mb-6 lg:text-xl">
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
            <Card
              isFooterBlurred
              className="py-4 bg-slate-200 dark:bg-cyan-950"
            >
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold text-cyan-950 dark:text-cyan-500">
                  Sergi Huguet
                </p>
                <small className="text-slate-800 dark:text-slate-400">
                  25 Years
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
              <CardFooter className="absolute bg-slate-200 dark:bg-[#151920] bg-opacity-95 dark:bg-opacity-95 bottom-0 z-10 border-t-1 border-slate-100 dark:border-slate-800">
                <div className="flex flex-grow gap-2 items-center">
                  <Image
                    alt="Breathing app icon"
                    className="rounded-full w-10 h-11 bg-black"
                    src="/image/developer.png"
                  />
                  <div className="flex flex-col">
                    <p className="text-tiny text-slate-800 dark:text-slate-400">
                      Specialist in React and Vue
                    </p>
                    <p className="text-tiny text-slate-800 dark:text-slate-400">
                      5 years of experience
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  Hire Me
                </Button>
              </CardFooter>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
