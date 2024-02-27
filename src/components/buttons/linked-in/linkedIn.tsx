import styles from "./linkedin.module.css";
import { motion } from "framer-motion";

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
  return (
    <a
      className={styles["linked-in-link"]}
      href="https://www.linkedin.com/in/abbey-ross-5198b7128"
    >
      <motion.svg
        strokeWidth={1}
        className={styles["svg"]}
        width="195"
        height="60"
        initial="hidden"
        animate="visible"
      >
        <motion.rect
          width="190"
          height="55"
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
