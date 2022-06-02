import "./App.css";
import { Content } from "./components/content/content";
import { Media } from "./components/media/media";
import styles from "./app-styles.module.css";

const App = () => {
  return (
    <div className={styles["App"]}>
      <Media />
      <Content />
    </div>
  );
};

export default App;
