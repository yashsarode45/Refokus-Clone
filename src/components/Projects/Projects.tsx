import React, { useEffect, useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import "./projects.css";

const projectDetails = [
  {
    title: "Arqitel",
    description:
      "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
    url: "https://cdn.refokus.com/website/Arqitel/Arqitel%20project%20video%204_3.webm",
    hoverColor: "bg-[#5355ee]",
    services: [
      "Web Design",
      "Webflow Development",
      "Creative Development",
      "3D Animations",
    ],
  },
  {
    title: "Cula",
    description:
      "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
    url: "https://cdn.refokus.com/website/Cula_promo_new_4_3.mp4",
    hoverColor: "bg-[#4a576b]",
    services: ["Web Design", "Webflow Development", "Creative Development"],
  },
  {
    title: "TTR",
    description:
      "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
    url: "https://cdn.refokus.com/website/TTR/TTR%20project%20video%204_3_H.264.webm",
    hoverColor: "bg-[#46289a]",
    services: ["Web Design", "Webflow Development", "Strategy"],
  },
  {
    title: "Maniv",
    description:
      "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
    url: "https://cdn.refokus.com/website/Maniv-Compressed.mp4",
    hoverColor: "bg-[#2a9c6c]",
    services: ["Web Design", "Webflow Development", "Creative Development"],
  },
  {
    title: "YIR 2022",
    description:
      "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
    url: "https://cdn.refokus.com/website/YIR%20website%202022%204_3_VP9.webm",
    services: [
      "Web Design",
      "Strategy",
      "Creative Development",
      "3D Animations",
    ],
    hoverColor: "bg-[#382865]",
  },
  {
    title: "Summon",
    description:
      "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
    url: "https://cdn.refokus.com/website/2022/videos/summon.webm",
    services: ["Web Design", "Webflow Development", "3D Animations"],
    hoverColor: "bg-[#22636d]",
  },
  {
    title: "Rainfall",
    description:
      "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
    url: "https://cdn.refokus.com/website/2022/videos/rainfall.webm",
    services: [
      "Web Design",
      "Webflow Development",
      "Creative Development",
      "3D Animations",
    ],
    hoverColor: "bg-[#1430d4]",
  },
  {
    title: "Jungle",
    description:
      "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
    url: "https://cdn.refokus.com/website/jungle-4-3-.webm",
    services: ["Web Design", "Webflow Development", "Creative Development"],
    hoverColor: "bg-[#503ff0]",
  },
  {
    title: "Silvr",
    description:
      "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
    url: "https://cdn.refokus.com/website/2022/videos/Silvr.webm",
    services: ["Web Design", "Webflow Development", "Creative Development"],
    hoverColor: "bg-[#ff7548]",
  },
  {
    title: "Remind",
    description:
      "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
    url: "https://cdn.refokus.com/website/2022/videos/remind.webm",
    services: ["Web Design", "Webflow Development"],
    hoverColor: "bg-[#3d77e9]",
  },
  {
    title: "Like Magic",
    description:
      "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
    url: "https://cdn.refokus.com/website/2022/videos/weglotlikemagic.webm",
    services: ["Web Design", "Webflow Development"],
    hoverColor: "bg-[#030a8e]",
  },
  {
    title: "Rocket",
    description:
      "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
    url: "https://cdn.refokus.com/website/2022/videos/rocketchat.webm",
    services: ["Web Design", "Strategy", "Creative Development"],
    hoverColor: "bg-[#ff4747]",
  },
  {
    title: "Showcase",
    description:
      "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
    url: "https://cdn.refokus.com/refokus-redesign/showcase_4_3.mp4",
    services: ["Web Design"],
    hoverColor: "bg-[#ff5f2d]",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(0);

  const rowRefs = useRef<HTMLDivElement[]>([]);

  // Create spring animations for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const mouseX = useSpring(0, springConfig);
  const mouseY = useSpring(0, springConfig);

  // Transform mouse position to preview position with boundaries
  const previewX = useTransform(mouseX, [0, 2000], [-50, 50]);
  const previewY = useTransform(mouseY, [-200, 200], [-30, 30]);

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const row = rowRefs.current[hoveredIndex];

    if (!row) return;

    const rect = row.getBoundingClientRect();

    // Calculate mouse position relative to row center
    const relativeY = clientY - (rect.top + rect.height / 2);

    // Update spring animations
    mouseX.set(clientX);
    mouseY.set(relativeY);
  };

  const handleMouseLeave = (e) => {
    // Only reset if we're not entering the preview div
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!relatedTarget?.classList?.contains("preview-overlay")) {
      setHoveredIndex(0);
      mouseX.set(0);
      mouseY.set(0);
    }
  };

  useEffect(() => {
    // Calculate the offset based on the positions of row elements
    if (rowRefs.current[hoveredIndex]) {
      const rowElement = rowRefs.current[hoveredIndex];
      const containerTop = rowRefs.current[0].offsetTop;
      const rowTop = rowElement.offsetTop;
      const rowHeight = rowElement.offsetHeight;

      // Position the preview div centered vertically on the hovered row
      const previewHeight = 440; // Height of preview div
      setTopOffset(rowTop - containerTop + (rowHeight - previewHeight) / 2);
    } else {
      setTopOffset(0);
    }
  }, [hoveredIndex]);
  return (
    <div className=" w-full mt-32 mb-24 relative">
      {projectDetails.map((project, index) => (
        <motion.div
          ref={(el) => (rowRefs.current[index] = el as HTMLDivElement)}
          key={index}
          className={`w-full px-[88.5px] transit flex justify-between ${
            index !== projectDetails.length - 1
              ? `border-[0.5px] border-x-0 border-t-0 border-solid border-white`
              : ``
          } 
        ${
          index === hoveredIndex ? `${project.hoverColor}` : ``
        } transition-colors duration-300`}
          initial={false}
          animate={{
            paddingTop: index === hoveredIndex ? 69 : 40,
            paddingBottom: index === hoveredIndex ? 69 : 40,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
        >
          <div className=" flex flex-col justify-around items-start gap-16">
            <p className=" text-white font-Satoshi font-medium text-4xl leading-5">{`${project.title}`}</p>
            <div className=" flex flex-col ">
              {project.services.map((service, ind) => (
                <p className=" text-white font-Satoshi font-normal text-xs uppercase leading-5">
                  {service}
                </p>
              ))}
            </div>
          </div>
          <div className=" flex flex-col justify-around items-start gap-16 max-w-lg">
            <p className=" text-white font-Satoshi font-light text-lg leading-5 w-full">
              {project.description}
            </p>

            <a
              href="#"
              className={`link link--iocaste self-end transition-opacity duration-300 ${
                index === hoveredIndex ? " opacity-100" : " opacity-0"
              }`}
            >
              <span className=" text-white font-light">View Case Study</span>
              <svg
                className="link__graphic link__graphic--slide"
                width="300%"
                height="100%"
                viewBox="0 0 1200 60"
                preserveAspectRatio="none"
              >
                <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      ))}
      <motion.div
        className={`absolute pointer-events-none bg-white w-[585px] h-[440px] z-10 overflow-hidden rounded-xl left-[28%] `}
        animate={{
          top: topOffset,
        }}
        style={{
          x: previewX,
          y: previewY,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
      >
        <motion.div
          animate={{
            y: -hoveredIndex * 440,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          {projectDetails.map((project, ind) => (
            <video
              key={ind}
              src={project.url}
              muted
              autoPlay
              playsInline
              loop
              controls={false}
              className=" object-cover min-w-[585px] min-h-[440px] preview-overlay"
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
