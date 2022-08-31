import styles from "./linkedin.module.css";

export const LinkedIn = () => {
  return (
    <a
      className={styles["linked-in-link"]}
      href="https://www.linkedin.com/in/abbey-ross-5198b7128"
    >
      <button className={styles["linked-in-button"]}>PRESS ME FOR MAGIC</button>
    </a>
  );
};
