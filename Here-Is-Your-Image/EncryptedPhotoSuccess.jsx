"use client";
import * as React from "react";
import styles from "./EncryptedPhotoSuccess.module.css";

function EncryptedPhotoSuccess() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.mainContainer}>
        <section className={styles.contentWrapper}>
          <h1 className={styles.title}>
            Here is your encrypted photo for safekeeping!
          </h1>
          <p className={styles.message}>
            This now stores the evidence you gave us and can be decrypted later
            in life. Right click on the image to save it. When you reload this
            tab, the information you entered will not be stored, so there is no
            risk of it getting out in a potential data leak. We hope you are
            safe and have resources for you on the next tab should you need it.
          </p>
          <button className={styles.resourcesButton}>Resources</button>
        </section>
      </main>
    </>
  );
}

export default EncryptedPhotoSuccess;
