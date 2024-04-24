import { useEffect, useState } from "react";
import styles from "./linkedin.module.css";
import { motion } from "framer-motion";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

export const LinkedIn = () => {
  const dimensions = useWindowDimensions();

  return (
    <a
      className={styles["linked-in-link"]}
      href="https://www.linkedin.com/in/abbey-ross-5198b7128"
    >
      <motion.svg
        strokeWidth={1}
        className={styles["svg"]}
        width={dimensions.width < 500 ? "160" : "195"}
        height="60"
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          width={dimensions.width < 500 ? "155" : "190"}
          height={dimensions.width < 500 ? "52" : "56"}
          rx="30"
          stroke="#70f26c"
          variants={draw}
          custom={1}
          fill={"none"}
        />
      </motion.svg>
      <button className={styles["linked-in-button"]}>PRESS ME FOR MAGIC</button>
    </a>
  );
};
