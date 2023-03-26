import { SkillBar } from "./skillBar";
import styles from "./bars.module.css";

const SKILLS = {
  "React JS": 90,
  "React Native": 90,
  TypeScript: 85,
  Redux: 75,
  "Redux Sagas & Thunks": 70,
  Jest: 50,
  CSS: 60,
  HTML: 85,
};

const COLOURS = [
  "#D95D39",
  "#EA638C",
  "#89023E",
  "#2B59C3",
  "#A755C2",
  "#274C77",
  "#F0A202",
];

export const SkillsBars = () => {
  const content: JSX.Element[] = [];
  Object.entries(SKILLS).forEach((entry, idx) => {
    content.push(
      <SkillBar name={entry[0]} level={entry[1]} color={COLOURS[idx]} />
    );
  });

  return (
    <div className={styles["skillsBars"]}>
      <h3>{`Here's some of the technologies I've been working with recently:`}</h3>
      {content}
    </div>
  );
};
