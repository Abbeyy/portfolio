import styles from "./main.module.css";
import colours from "../../colour-palette.module.css";

export const Snippet = () => {
  return (
    <>
      <div className={`${styles["bold-text"]} ${styles["small-text"]}`}>
        HEY THERE, I'M
      </div>
      <div className={styles["snippet-title"]}>ABBEY</div>
      <div>👋</div>
      <br />
      <br />
      <div
        className={`${styles["bold-text"]} ${styles["small-text"]} ${styles["career"]}`}
      >
        WEB + MOBILE ENGINEER
      </div>
      <div className={styles["small-text"]}>2+ YEARS COMMERCIAL EXPERIENCE</div>
      <div className={styles["small-text"]}>
        I SPECIALISE IN REACT NATIVE AND REACTJS. BASED IN CARDIFF, UK.
      </div>
      <br />
      <br />
    </>
  );
};
