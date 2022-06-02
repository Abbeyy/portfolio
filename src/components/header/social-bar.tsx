import { SocialMediaIconsReact } from "social-media-icons-react";

import styles from "./header-styles.module.css";

export const SocialBar = () => {
  return (
    <div className={styles["social-bar"]}>
      <div className={styles["social-bar-email"]}>ABBEY101@LIVE.CO.UK</div>
      <SocialMediaIconsReact
        borderColor="#AB9272"
        icon="linkedin"
        iconColor="#FBF6E2"
        backgroundColor="#D9AA95"
        url="www.linkedin.com/in/abbey-ross-5198b7128"
        size="48"
      />
    </div>
  );
};
