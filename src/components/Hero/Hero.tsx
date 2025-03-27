import React, { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import type { MotionValue } from "framer-motion";
import Image1 from "../../assets/634ef0ac7e7179d210dc41f0_Summon.png";
import Image2 from "../../assets/634ef09178195ce0073e38f3_Refokus Tools-1.png";
import Image3 from "../../assets/634ef0acbc45cb2f4fc5c6b2_Yahoo.png";
import Image4 from "../../assets/634ef092455ce2cf591e52d1_Rainfall.png";
import Image5 from "../../assets/634ef0ac7e7179d210dc41f0_Summon.png";
import Image6 from "../../assets/634ef0af108a465002975acd_Showcase Websites (1).png";

const Hero = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const [images, setIMages] = useState([
    {
      url: Image1,
      top: "60%",
      left: "80%",
      isActive: false,
    },
    {
      url: Image2,
      top: "65%",
      left: "76%",
      isActive: false,
    },
    {
      url: Image3,
      top: "52%",
      left: "82%",
      isActive: false,
    },
    {
      url: Image4,
      top: "74%",
      left: "79%",
      isActive: false,
    },
    {
      url: Image5,
      top: "68%",
      left: "83%",
      isActive: false,
    },
    {
      url: Image6,
      top: "63%",
      left: "78%",
      isActive: false,
    },
  ]);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    showImages(Math.floor(latest * 100));
  });
  const showImages = (scrollPercentage) => {
    const img = (arr) => {
      setIMages((prev) =>
        prev.map((items, index) =>
          arr.indexOf(index) === -1
            ? { ...items, isActive: false }
            : { ...items, isActive: true }
        )
      );
    };

    // Adjusted thresholds for smoother activation
    if (scrollPercentage < 1) img([]);
    else if (scrollPercentage < 3) img([0]);
    else if (scrollPercentage < 5) img([0, 1]);
    else if (scrollPercentage < 7) img([0, 1, 2]);
    else if (scrollPercentage < 9) img([0, 1, 2, 3]);
    else if (scrollPercentage < 11) img([0, 1, 2, 3, 4]);
    else img([0, 1, 2, 3, 4, 5]);
  };
  return (
    <div className="relative flex mt-20 flex-col gap-[46px] w-full items-start justify-center mx-auto max-w-screen-2xl ">
      <div className="flex flex-col items-start">
        <div className=" text-white font-Satoshi font-medium text-[9rem] tracking-tight">
          Portfolio
        </div>
        <div className=" text-white font-Satoshi font-light text-4xl leading-5 tracking-tight">
          Web Design, Webflow, Creative Development, and beyond
        </div>
      </div>
      <div className="  border-[0.5px] border-x-0 border-t-0 border-solid border-white w-full"></div>
      <div className=" w-[35%] text-white font-Satoshi font-light">
        Refokus is a top Webflow Agency combining high-end design with Webflow
        Development expertise.
      </div>
      <div className="absolute w-full h-full top-0 right-0">
        {images.map(
          (items, index) =>
            items.isActive && (
              <img
                key={index}
                className="w-80 absolute -translate-x-1/2 -translate-y-1/2 rounded-2xl"
                style={{ top: items.top, left: items.left }}
                src={items.url}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
};

export default Hero;
