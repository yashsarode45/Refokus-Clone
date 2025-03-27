import React from "react";
import { motion } from "framer-motion";
import Logo1 from "../../assets/logos/basf.svg";
import Logo2 from "../../assets/logos/bcgp.svg";
import Logo3 from "../../assets/logos/botify-white.svg";
import Logo4 from "../../assets/logos/haufe.svg";
import Logo5 from "../../assets/logos/jungle.svg";
import Logo6 from "../../assets/logos/logo-white.svg";
import Logo7 from "../../assets/logos/Logo.svg";
import Logo8 from "../../assets/logos/logo2.svg";
import Logo9 from "../../assets/logos/LogoWhite.svg";
import Logo10 from "../../assets/logos/mural.svg";
import Logo11 from "../../assets/logos/remind.svg";
import Logo12 from "../../assets/logos/sevdesk-white.svg";
import Logo13 from "../../assets/logos/Singularity_logo.svg";
import Logo14 from "../../assets/logos/spotify.svg";
import Logo15 from "../../assets/logos/yahoo.svg";

const Logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
];
const Marquee = () => {
  return (
    <div className=" mt-28 flex w-full py-8  gap-20 overflow-hidden">
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        className="flex pr-16 flex-shrink-0 gap-36"
      >
        {Logos.map((Logo, index) => (
          <img key={index} src={Logo} className="w-32 flex-shrink-0" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: "0" }}
        animate={{ x: "-100%" }}
        transition={{ ease: "linear", duration: 80, repeat: Infinity }}
        className="flex pr-16 flex-shrink-0 gap-36"
      >
        {Logos.map((Logo, index) => (
          <img key={index} src={Logo} className="w-32 flex-shrink-0" />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
