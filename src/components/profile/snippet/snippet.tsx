import styles from "./snippet.module.css";
import { motion } from "framer-motion";

export const Snippet = () => {
  return (
    <>
      <br />
      <br />
      <div className={`${styles["bold-text"]} ${styles["small-text"]}`}>
        HEY THERE, I'M
      </div>
      <motion.div
        className={styles["snippet-title"]}
        animate={{
          x: [
            0, -5, 10, -15, 20, -25, 30, -45, 60, -60, 45, -30, 25, -20, 15,
            -10, 5, 0,
          ],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatDelay: 3,
        }}
      >
        ABBEY
      </motion.div>
      <div>👋</div>
      <br />
      <br />
      <div
        className={`${styles["bold-text"]} ${styles["small-text"]} ${styles["career"]}`}
      >
        WEB + MOBILE ENGINEER
      </div>
      <div className={styles["small-text"]}>4+ YEARS COMMERCIAL EXPERIENCE</div>
      <div className={styles["small-text"]}>
        I SPECIALISE IN REACTJS AND REACT NATIVE. BASED IN CARDIFF, UK.
      </div>
      <br />
      <br />
    </>
  );
};
