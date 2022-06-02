import styles from "./main.module.css";

export const Description = () => {
  return (
    <>
      <div className={styles["small-text"]}>
        Fullstack JavaScript developer and React Native for mobile engineer who
        is keen to be challenged and actively likes to learn new things. Well
        versed in the world of theory, I am experienced in progression by an
        Agile workflow. I have taught myself new languages, frameworks and tools
        through multiple self-sourced placements and graduate roles. Currently
        working at
        <a className={styles["link"]} href="https://www.aforza.com">
          Aforza
        </a>
        .
      </div>
    </>
  );
};
