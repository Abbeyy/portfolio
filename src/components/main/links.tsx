import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import styles from "./main.module.css";

export const Links = () => {
  return (
    <a className={`${styles["link-a"]}`} href="https://github.com/Abbeyy">
      <div className={`${styles["link-panel"]}`}>
        <Button
          style={{
            color: "#70F26C",
            backgroundColor: "black",
            borderColor: "#70F26C",
            borderRadius: 25,
          }}
          variant="outlined"
          startIcon={<CodeIcon />}
        >
          Repositories
        </Button>
      </div>
    </a>
  );
};
