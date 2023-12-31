import React, { useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const EmailSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
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
            message: ""
          });
          setIsFormSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your first name and last name
            </label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleInputChange}
              required
              className="bg-[#151920] border border-[#585c6d] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your full name"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              required
              className="bg-[#151920] border border-[#585c6d] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="username@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="text-white block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              type="text"
              id="subject"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              className="bg-[#151920] border border-[#585c6d] placeholder-[#9ca2a9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Contact me..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {isFormSubmitted && (
            <p className="text-green-500 mt-2">Form submitted successfully!</p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default EmailSection;
