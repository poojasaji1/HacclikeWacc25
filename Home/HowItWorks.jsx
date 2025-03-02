"use client";
import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import styles from "./HowItWorks.module.css";

function HowItWorks() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <div className={styles.container}>
        <Header />
        <MainContent />
      </div>
    </>
  );
}

export default HowItWorks;
