import styles from "./main.module.css";

export const HireMe = () => {
  return (
    <a
      className={styles["hire-me-link"]}
      href="https://www.linkedin.com/in/abbey-ross-5198b7128"
    >
      <button className={styles["hire-me-button"]}>PRESS ME FOR MAGIC</button>
    </a>
  );
};
