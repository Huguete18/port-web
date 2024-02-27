import React, { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";

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
  const portfolio =
    "This website is a showcase of my works and projects. Here you can explore my skills, experiences, and achievements. If you are interested in my work and want to know more, don’t hesitate to contact me.";
  const protections =
    "Your data is valuable. To protect it, it’s important to back up regularly, use encryption, and be aware of who you give access to your information.";
  const contact =
    "If you are interested in my work, send me an email. For more details, visit my LinkedIn and GitHub.";

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
        <Accordion
          variant="shadow"
          className="mt-4 bg-slate-200 dark:bg-cyan-950 text-cyan-950 dark:text-cyan-300"
        >
          <AccordionItem key="1" aria-label="My Portfolio" title="My Portfolio">
            {portfolio}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Data Protection"
            title="Data Protection"
          >
            {protections}
          </AccordionItem>
          <AccordionItem key="3" aria-label="Contact" title="Contact">
            <div className="max-w-md">
              <div className="space-y-1">{contact}</div>
              <Divider className="my-4" />
              <div className="flex h-5 items-center space-x-4 text-small mb-4">
                <div>
                  <Button size="sm" color="primary" variant="solid">
                    <Link
                      href="https://www.linkedin.com/in/sergi-huguet-986b3071/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinKedIn
                    </Link>
                  </Button>
                </div>
                <Divider orientation="vertical" />
                <div>
                  <Button size="sm" color="primary" variant="solid">
                    <Link
                      href="https://github.com/Huguete18"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <form ref={form} onSubmit={sendEmail} className="flex flex-col mt-4">
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
                    className="text-slate-800 dark:text-[#cad7e0]"
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
                    className="text-slate-800 dark:text-[#cad7e0]"
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
                className="text-slate-800 dark:text-[#cad7e0]"
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
