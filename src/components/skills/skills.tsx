import { SkillsBars } from "./skills-bars/skillsBars";
import { Summary } from "./summary/summary";
import styles from "./skills.module.css";

export const Skills = () => (
  <div className={styles["skills"]}>
    <Summary />
    <SkillsBars />
  </div>
);
