import styles from "./main.module.css";

export const Description = () => {
  return (
    <>
      <div className={`${styles["small-text"]} ${styles["see-more"]}`}>
        See my LinkedIn for more. Currently working at
        <a className={styles["link"]} href="https://www.aforza.com">
          Aforza
        </a>
      </div>
    </>
  );
};
