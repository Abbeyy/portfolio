import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <div className={styles["summary"]}>
      <p className={styles["small-text"]}>
        Hi! My name is <span className={styles["highlight"]}>Abbey</span> and I
        create mobile and web apps with React Native + React.
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        {`My career in software started when I was young; I have fond memories of my dad helping me to code my first game on a Rspberry Pi aged 12.`}
      </p>
      <p className={styles["small-text"]}>
        {`Fast-forward to 2020 and I graduated from Cardiff University with a 1st in Applied Software Engineering.`}
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        I have since had the pleasure of working with some wonderful people and
        gaining great experience across an array of domains.
      </p>
    </div>
  );
};
