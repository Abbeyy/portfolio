import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import styles from "./bars.module.css";

type Props = {
  name: string;
  level: number;
  color: string;
};

export const SkillBar = (props: Props) => {
  const { name, level, color } = props;

  return (
    <div className={styles["skillBar"]}>
      <p className={styles["skillName"]}>{name}</p>
      <div className={styles["bar"]}>
        <LinearProgress
          variant="determinate"
          sx={{
            [`& .${linearProgressClasses.bar}`]: {
              backgroundColor: color,
            },
          }}
          value={level}
        />
      </div>
    </div>
  );
};
