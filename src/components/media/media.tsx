import styles from "../../app-styles.module.css";

import portfolioImg from "../../assets/media.jpg";

export const Media = () => {
  return (
    <div className={styles["image-container"]}>
      <img src={portfolioImg} alt={"Portfolio"} className={styles["image"]} />
    </div>
  );
};
