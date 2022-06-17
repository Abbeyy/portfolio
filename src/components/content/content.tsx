import { HireMe } from "../main/hireMe";
import { Header } from "../header/header";
import { Description } from "../main/description";
import { Snippet } from "../main/snippet";

import styles from "./content-styles.module.css";
import Drawer from "../drawer/drawer";
import { useState } from "react";
import { determineContent } from "../../helpers/content";

export enum MENU_CONTENT {
  PROFILE = "profile",
  SKILLS = "skills",
  EXPERIENCE = "experience",
  SNIPPETS = "snippets",
}

export const Content = () => {
  const [content, setContent] = useState(MENU_CONTENT.PROFILE);

  return (
    <div className={styles["content"]}>
      <Header />
      <main className={styles["main"]}>
        <Drawer setContent={setContent} />
        {determineContent(content)}
      </main>
    </div>
  );
};
