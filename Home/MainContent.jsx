import React from "react";
import styles from "./MainContent.module.css";

function MainContent() {
  return (
    <main className={styles.content}>
      <h2 className={styles.title}>How It Works</h2>
      <p className={styles.description}>
        StegoStorage is a secure platform that enables abuse survivors to store
        crucial evidence (like voice recordings, images, or text) in hidden,
        harmless-looking files (called steganography). These files can later be
        used as proof in legal proceedings and saved in the survivor's files
        without raising suspicion or putting them at risk.
      </p>
      <button className={styles.button}>Get Started</button>
    </main>
  );
}

export default MainContent;
