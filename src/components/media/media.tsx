import { AnimatePresence } from "framer-motion";
import styles from "../../app-styles.module.css";
import { motion } from "framer-motion";
import portfolioImg from "../../assets/PortfolioArt.png";

export const Media = () => {
  return (
    <div className={styles["image-container"]}>
      <AnimatePresence>
        <motion.img
          src={portfolioImg}
          alt={"Portfolio"}
          className={styles["image"]}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};
