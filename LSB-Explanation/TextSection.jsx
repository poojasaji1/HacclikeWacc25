import React from "react";
import styles from "./Header3.module.css";

function TextSection() {
  return (
    <section className={styles.text}>
      Next, your data will be processed through Lsb-steganography and text-based
      steganography tools in order to encode them. You pick an image as a
      &quot;cover&quot; file, and the hidden evidence will be encoded into the
      least significant bits of the image's pixel data. This won't visibly alter
      the image but will carry the hidden data.
    </section>
  );
}

export default TextSection;
