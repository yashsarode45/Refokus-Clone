import React, { useRef, useState } from "react";
import { useEffect } from "react";
import {
  animate,
  motion,
  transform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import styles from "./stickyCursor.module.scss";

const StickyCursor = ({ stickyElement, elementHovered }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursor = useRef(null);

  const cursorSize = isHovered ? 60 : 15;
  const hoveredCursorSize = 60;

  // Function to get current cursor size
  const getCurrentCursorSize = () => {
    return elementHovered ? hoveredCursorSize : cursorSize;
  };

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const scale = {
    x: useMotionValue(1),
    y: useMotionValue(1),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const rotate = (distance) => {
    const angle = Math.atan2(distance.y, distance.x);
    animate(cursor.current, { rotate: `${angle}rad` }, { duration: 0 });
  };

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const currentSize = getCurrentCursorSize();

    const { left, top, height, width } =
      stickyElement.current.getBoundingClientRect();

    // Center position of the stickyElement
    const center = { x: left + width / 2, y: top + height / 2 };

    if (isHovered) {
      // Distance between the mouse pointer and the center of the custom cursor
      const distance = { x: clientX - center.x, y: clientY - center.y };

      // Rotate
      rotate(distance);

      // Stretch based on the distance
      const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
      const newScaleX = transform(absDistance, [0, height / 2], [1, 1.3]);
      const newScaleY = transform(absDistance, [0, width / 2], [1, 0.8]);
      scale.x.set(newScaleX);
      scale.y.set(newScaleY);

      // Move mouse to center of stickyElement + slightly move it towards the mouse pointer
      mouse.x.set(center.x - currentSize / 2 + distance.x * 0.1);
      mouse.y.set(center.y - currentSize / 2 + distance.y * 0.1);
    } else {
      // Center the cursor around the mouse position by offsetting by half the current size
      mouse.x.set(clientX - currentSize / 2);
      mouse.y.set(clientY - currentSize / 2);
    }
  };

  const manageMouseOver = (e) => {
    setIsHovered(true);
  };

  const manageMouseLeave = (e) => {
    setIsHovered(false);
    animate(
      cursor.current,
      { scaleX: 1, scaleY: 1 },
      { duration: 0.1 },
      { type: "spring" }
    );
  };

  useEffect(() => {
    stickyElement.current.addEventListener("mouseenter", manageMouseOver);
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave);
    window.addEventListener("mousemove", manageMouseMove);

    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver);
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave);
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered, elementHovered]);

  const template = ({ rotate, scaleX, scaleY }) => {
    return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`;
  };

  return (
    <div className={styles.cursorContainer}>
      <motion.div
        transformTemplate={template}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: scale.x,
          scaleY: scale.y,
        }}
        animate={{
          width: elementHovered ? hoveredCursorSize : cursorSize,
          height: elementHovered ? hoveredCursorSize : cursorSize,
        }}
        className={styles.cursor}
        ref={cursor}
      ></motion.div>
    </div>
  );
};

export default StickyCursor;
