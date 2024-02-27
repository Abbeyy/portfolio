import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <div className={styles["summary"]}>
      <p className={styles["small-text"]}>
        I create <span className={styles["highlight"]}>web</span> and
        <span className={styles["highlight"]}>mobile</span> apps with React +
        React Native.
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        {`My career in software started when I was 11 and dad helped me to code my first game on a Raspberry Pi.`}
      </p>
      <p className={`${styles["small-text"]}`}>
        {`Attending an all-girls grammar for A_Levels meant I had to fight for lessons when they did not offer any computing courses.`}
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        {`Fast-forward to 2020 just after the pandemic started and I graduated from Cardiff University with a 1st in Applied Software Engineering.`}
      </p>
      <p className={styles["small-text"]}>
        {` I have since had the pleasure of working with some wonderful people and
        gained great experience across an array of domains.`}
      </p>
    </div>
  );
};
