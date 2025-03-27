import React, { forwardRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./button.module.scss";
import Magnetic from "../Magnetic";
type Props = {
  setElementHovered: React.Dispatch<React.SetStateAction<boolean>>;
};
const HeaderButton = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const [isActive, setIsActive] = useState(false);
  const { setElementHovered } = props;

  return (
    <>
      <Magnetic>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          >
            <div ref={ref} className={styles.bounds}></div>
          </div>
        </div>
      </Magnetic>
      <AnimatePresence mode="wait">
        {isActive && <Sidebar setElementHovered={setElementHovered} />}
      </AnimatePresence>
    </>
  );
});

export default HeaderButton;
