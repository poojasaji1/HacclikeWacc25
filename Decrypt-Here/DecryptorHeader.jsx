import React from "react";
import styles from "./DecryptorHeader.module.css";

export function DecryptorHeader() {
  return (
    <>
      <h1 className={styles.title}>
        Upload your encrypted photo here to decrypt it!
      </h1>
      <p className={styles.description}>
        If you need to decrypt a photo and access the message hidden within,
        here would be the place to do so! Upload your steganography image here,
        and we'll give you your file!
      </p>
    </>
  );
}
