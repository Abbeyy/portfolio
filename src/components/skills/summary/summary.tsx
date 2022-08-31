import styles from "./summary.module.css";

export const Summary = () => {
  return (
    <div className={styles["summary"]}>
      <p className={styles["small-text"]}>
        Hi! My name is <span className={styles["highlight"]}>Abbey</span> and I
        create mobile and web apps with React Native + React.
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        {`My curiosity about coding stems from my childhood; experimenting with a
        Raspberry Pi with the help of my dad and choosing Computing to study at
        A Level.`}
      </p>
      <p className={styles["small-text"]}>
        {`Fast-forward to 2020 and I graduated from Cardiff University with a 1:1 in Applied Software Engineering whilst working part-time in industry (self-sourced position).`}
      </p>
      <p className={`${styles["small-text"]} ${styles["accent"]}`}>
        I have since had the pleasure of working with some wonderful people, for
        a company creating tools to boost the consumer goods industry. I have a
        sweep of side-projects in my
        <a
          className={styles["link"]}
          href="https://abbeys--portfolio.web.app/"
        >{`portfolio (profile page)`}</a>
        , which demonstrate a portion of my abilities across mobile and web.
      </p>
    </div>
  );
};
