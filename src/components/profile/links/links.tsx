import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import styles from "./links.module.css";

export const Links = () => {
  return (
    <div className={`${styles["link-panel"]}`}>
      <a href="https://github.com/Abbeyy">
        <div className={`${styles["link-a"]}`}>
          <Button
            style={{
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            Repositories
          </Button>
        </div>
      </a>
      <a href="https://dentistry-site.web.app/home">
        <div className={`${styles["link-a"]}`}>
          <Button
            style={{
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            🦷 Dentist Clinic
          </Button>
        </div>
      </a>
      <a href="https://abbeys--countries.web.app/">
        <div className={`${styles["link-a"]}`}>
          <Button
            style={{
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            🌐 Countries
          </Button>
        </div>
      </a>
      <a href="https://abbeys--player.web.app">
        <div className={`${styles["link-a"]}`}>
          <Button
            style={{
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            ♫ Player
          </Button>
        </div>
      </a>
    </div>
  );
};
