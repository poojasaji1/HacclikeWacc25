"use client";
import * as React from "react";
import styles from "./Header3.module.css";
import TextSection from "./TextSection";
import VideoSection from "./VideoSection";

function Header3() {
  return (
    <article className={styles.header3}>
      <TextSection />
      <VideoSection />
    </article>
  );
}

export default Header3;
