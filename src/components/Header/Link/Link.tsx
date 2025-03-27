import React from "react";
import { motion } from "framer-motion";
import { slide, scale } from "../variants";
import styles from "./link.module.scss";

const Link = ({ data, isActive, setSelectedIndicator, setElementHovered }) => {
  const { title, href, index } = data;
  return (
    <motion.div
      className={styles.link}
      onMouseEnter={() => {
        setSelectedIndicator(href);
        setElementHovered(true);
      }}
      onMouseLeave={() => {
        setElementHovered(false);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className={styles.indicator}
      ></motion.div>
      <a className=" font-Satoshi font-light" href={href}>
        {title}
      </a>
    </motion.div>
  );
};

export default Link;
