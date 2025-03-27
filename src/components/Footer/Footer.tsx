import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="flex  my-20 min-h-96 gap-5 w-full  mx-auto max-w-screen-2xl ">
      <motion.div
        whileHover={{
          padding: "28px",
          transition: {
            duration: 0.3,
          },
        }}
        className=" w-1/4 p-5 rounded-lg bg-[#29292e] flex flex-col justify-between cursor-pointer"
      >
        <div className=" flex flex-col gap-8  items-start">
          <p className=" text-white uppercase font-Satoshi text-xs font-normal">
            Blog
          </p>
          <p className=" text-white font-Satoshi text-3xl  font-medium">
            News & Insights
          </p>
        </div>
        <p className=" font-Satoshi font-normal text-sm text-white">
          News and Insights on Web Design, Webflow Development, and Creative
          Development.
        </p>
      </motion.div>
      <motion.div
        whileHover={{
          padding: "28px",
          backgroundColor: "#7542FF",
          transition: {
            duration: 0.3,
          },
        }}
        className=" flex-1 p-5 rounded-lg  bg-[#29292e] flex flex-col justify-between cursor-pointer"
      >
        <div className=" flex flex-col gap-8 items-start">
          <p className=" text-white uppercase font-Satoshi text-xs font-normal">
            Get In Touch
          </p>
          <p className=" text-white font-Satoshi text-3xl font-medium">
            Let’s get to it. <br /> together.
          </p>
        </div>
        <p className=" text-7xl font-medium font-Satoshi  text-white">
          Start a Project
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
