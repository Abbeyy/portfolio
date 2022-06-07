import { HireMe } from "../main/hireMe";
import { Header } from "../header/header";
import { Description } from "../main/description";
import { Snippet } from "../main/snippet";

import styles from "./content-styles.module.css";
import { Links } from "../main/links";

export const Content = () => {
  return (
    <div className={styles["content"]}>
      <Header />
      <main className={styles["main"]}>
        <Snippet />
        <Description />
        <Links />
        <HireMe />
      </main>
    </div>
  );
};
