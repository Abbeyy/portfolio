import CodeIcon from "@mui/icons-material/Code";
import Button from "@mui/material/Button";
import styles from "./links.module.css";
import { motion } from "framer-motion";

export const Links = () => {
  return (
    <div className={`${styles["link-panel"]}`}>
      <a href="https://github.com/Abbeyy">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4], x: [0, 85, 70] }}
          transition={{ duration: 0.3 }}
          className={`${styles["link-a"]}`}
        >
          <Button
            style={{
              cursor: "pointer",
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            <p
              style={{
                minWidth: "92px",
              }}
              className={`${styles["link-a-text"]}`}
            >
              Repositories
            </p>
          </Button>
        </motion.div>
      </a>
      <a href="https://abbeys-quiz-site.web.app/">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4], x: [0, 85, 70] }}
          transition={{ duration: 0.3 }}
          className={`${styles["link-a"]}`}
        >
          <Button
            style={{
              cursor: "pointer",
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            <p
              style={{ minWidth: "120px" }}
              className={`${styles["link-a-text"]}`}
            >
              🎤 Ittttttts Quiz time!
            </p>
          </Button>
        </motion.div>
      </a>
      <a href="https://abbeys--player.web.app/login">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4], x: [0, 85, 70] }}
          transition={{ duration: 0.3 }}
          className={`${styles["link-a"]}`}
        >
          <Button
            style={{
              cursor: "pointer",
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            <p
              style={{ minWidth: "120px" }}
              className={`${styles["link-a-text"]}`}
            >
              🎶 EchoSpace
            </p>
          </Button>
        </motion.div>
      </a>
      <a href="https://dentistry-site.web.app/">
        <motion.div
          whileHover={{ scale: [null, 1.5, 1.4], x: [0, 85, 70] }}
          transition={{ duration: 0.3 }}
          className={`${styles["link-a"]}`}
        >
          <Button
            style={{
              cursor: "pointer",
              color: "#70F26C",
              backgroundColor: "black",
              borderColor: "#70F26C",
              borderRadius: 25,
            }}
            variant="outlined"
            startIcon={<CodeIcon />}
            className={`${styles["link-a"]}`}
          >
            <p
              style={{ minWidth: "120px" }}
              className={`${styles["link-a-text"]}`}
            >
              🦷 Dentist Clinic
            </p>
          </Button>
        </motion.div>
      </a>
      {/* <a href="https://abbeys--countries.web.app/">
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
      */}
    </div>
  );
};
