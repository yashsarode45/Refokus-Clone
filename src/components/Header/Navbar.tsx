import React, { forwardRef } from "react";
import Logo from "../../assets/logo.svg";
import HeaderButton from "./Button/HeaderButton";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type Props = {
  setElementHovered: React.Dispatch<React.SetStateAction<boolean>>;
};
const Navbar = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { setElementHovered } = props;
  return (
    <div className=" flex  justify-between items-center mx-auto max-w-screen-2xl py-4">
      <img className="w-[8vw]" src={Logo} />
      <div className=" text-white flex gap-2">
        <a
          className=" self-center  transition-all duration-300"
          target="_blank"
          href="https://github.com/yashsarode45"
        >
          <FaGithub className=" w-9 h-9" />
        </a>

        <a
          className=" self-center transition-all duration-300"
          target="_blank"
          href="https://www.linkedin.com/in/yashsarode/"
        >
          {" "}
          <FaLinkedin className=" w-9 h-9" />
        </a>
        <HeaderButton setElementHovered={setElementHovered} ref={ref} />
      </div>
    </div>
  );
});

export default Navbar;
