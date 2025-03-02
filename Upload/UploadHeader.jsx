import React from "react";
import styles from "./UploadHeader.module.css";

const UploadHeader = () => {
  return (
    <header>
      <h1 className={styles.title}>First, upload your message.</h1>
      <p className={styles.subtitle}>
        If it's an audio message or an image, upload it here and we will convert
        it into text. If it is text you want to encrypt, type it here below!
      </p>
    </header>
  );
};

export default UploadHeader;
