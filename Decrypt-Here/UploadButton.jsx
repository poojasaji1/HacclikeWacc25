"use client";
import React from "react";
import styles from "./UploadButton.module.css";

export function UploadButton() {
  const handleUpload = () => {
    // Handle file upload logic here
  };

  return (
    <button
      onClick={handleUpload}
      className={styles.uploadButton}
      aria-label="Upload image for decryption"
    >
      Upload image
    </button>
  );
}
