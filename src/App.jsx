import React, { useRef, useState } from "react";
import Navbar from "./components/Header/Navbar";
import StickyCursor from "./components/StickyCursor/StickyCursor";
import Hero from "./components/Hero/Hero";
import Marquee from "./components/Hero/Marquee";
import { useScroll } from "framer-motion";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

const App = () => {
  /* Locomotive scroll instance */
  const stickyElement = useRef();
  const containerRef = useRef();
  const [elementHovered, setElementHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  return (
    <div
      ref={containerRef}
      className=" bg-[#101215] w-screen h-screen overflow-y-auto overflow-x-hidden"
    >
      <Navbar setElementHovered={setElementHovered} ref={stickyElement} />
      <Hero scrollYProgress={scrollYProgress} />
      <Marquee />
      <Projects />
      <Footer />
      <div className="w-full mb-4 mx-auto max-w-screen-2xl flex justify-between">
        <p className=" text-white font-Satoshi font-normal text-base">
          Made with React, Typescript, Framer Motion
        </p>
        <p className=" text-white font-Satoshi font-normal text-base">
          Yash Sarode
        </p>
      </div>
      <StickyCursor
        elementHovered={elementHovered}
        stickyElement={stickyElement}
      />
    </div>
  );
};

export default App;
