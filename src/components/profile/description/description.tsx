import styles from "./description.module.css";

export const Description = () => {
  return (
    <div className={`${styles["small-text"]} ${styles["see-more"]}`}>
      See my LinkedIn for more. Currently working at
      <a className={styles["link"]} href="https://www.rock.co.uk/">
        Rock
      </a>
    </div>
  );
};
