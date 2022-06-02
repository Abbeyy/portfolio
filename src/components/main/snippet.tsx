import styles from "./main.module.css";
import colours from "../../colour-palette.module.css";

export const Snippet = () => {
  return (
    <>
      <div className={styles["snippet-title"]}>ABBEY</div>
      {/* <p className={`${colours["iron-color"]} ${styles["bold-text"]}`}>-</p> */}
      <div className={`${styles["bold-text"]} ${styles["small-text"]}`}>
        MID SOFTWARE ENGINEER
      </div>
      <p className={`${colours["iron-color"]} ${styles["bold-text"]}`}>-</p>
      <div className={styles["small-text"]}>2+ YEARS COMMERCIAL EXPERIENCE</div>
      <div className={styles["small-text"]}>
        REACT + REACT NATIVE SPECIALTY / WEB + MOBILE
      </div>
      <div className={styles["small-text"]}>
        1st CLASS BSC, APPLIED SOFTWARE ENG, CARDIFF UNI
      </div>
      <p className={`${colours["iron-color"]} ${styles["bold-text"]}`}>-</p>
    </>
  );
};
