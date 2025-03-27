import React, { useState } from "react";
import { motion } from "framer-motion";
import { menuSlide } from "../variants";
import Link from "../Link/Link";
import Curve from "../Curve/Curve";
import styles from "./sidebar.module.scss";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Sidebar = ({ setElementHovered }) => {
  const [selectedIndicator, setSelectedIndicator] = useState("/work");

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div
        onMouseLeave={() => setSelectedIndicator("/work")}
        className={styles.body}
      >
        <div className={styles.nav}>
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                setElementHovered={setElementHovered}
              />
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Sidebar;
