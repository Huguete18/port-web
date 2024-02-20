import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

const EmailSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e6es5ip",
        "template_a1apvpz",
        form.current,
        "7hl6kHHAdzJULJHG9"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const variants = ["faded"];
  const colors = ["primary"];

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-12 gap-4 relative"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h5 className="text-xl font-bold text-white my-2">Le{"t's"} Connect</h5>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Explore my coding journey and le{"t's"} connect! Feel free to reach
          out for collaboration, questions, or just a friendly chat about coding
          and technology.
        </p>
        <p className="text-[#adb7be] mb-4 max-w-md">
          Le{"t's"} code, connect, and create amazing things together!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link
            href="https://github.com/Huguete18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sergi-huguet-986b3071/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <br />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
          <div className="w-full flex flex-col gap-4 mb-6">
            {variants.map((variant) =>
              colors.map((color) => (
                <div
                  key={variant}
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="text"
                    id="name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    isRequired
                    color={color}
                    variant={variant}
                    label="Full Name"
                    placeholder="Enter your name"
                    className="text-black"
                  />
                </div>
              ))
            )}
          </div>
          <div className="w-full flex flex-col gap-4 mb-6">
            {variants.map((variant) =>
              colors.map((color) => (
                <div
                  key={variant}
                  className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                >
                  <Input
                    type="email"
                    id="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    isRequired
                    color={color}
                    variant={variant}
                    label="Email"
                    placeholder="Enter your name"
                    className="text-black"
                  />
                </div>
              ))
            )}
          </div>
          <div className="w-full flex flex-col gap-4 mb-6">
            {colors.map((color) => (
              <Textarea
                key={color}
                id="subject"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                isRequired
                color={color}
                variant="faded"
                label="Description"
                placeholder="Enter your description"
                className="text-black"
              />
            ))}
          </div>
          <Button type="submit" color="primary" variant="ghost">
            Send Message
          </Button>
          {isFormSubmitted && (
            <p className="text-green-500 mt-2">Form submitted successfully!</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSection;
