"use client";
import React from "react";
import styles from "./MessageUploader.module.css";
import UploadHeader from "./UploadHeader";
import UploadControls from "./UploadControls";
import MessageInput from "./MessageInput";

const MessageUploader = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@600&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <UploadHeader />
        <UploadControls />
        <MessageInput />
      </main>
    </>
  );
};

export default MessageUploader;
