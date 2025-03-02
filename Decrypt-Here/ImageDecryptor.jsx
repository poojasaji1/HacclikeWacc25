"use client";
import React from "react";
import styles from "./ImageDecryptor.module.css";
import { DecryptorHeader } from "./DecryptorHeader";
import { UploadButton } from "./UploadButton";

function ImageDecryptor() {
  return (
    <main className={styles.container}>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <section className={styles.content}>
        <DecryptorHeader />
        <UploadButton />
      </section>
    </main>
  );
}

export default ImageDecryptor;
