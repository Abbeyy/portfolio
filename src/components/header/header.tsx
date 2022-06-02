import { SocialBar } from "./social-bar";
import styles from "./header-styles.module.css";

export const Header = () => {
  return (
    <header className={styles["header"]}>
      <SocialBar />
    </header>
  );
};
