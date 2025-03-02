import React from "react";
import styles from "./Header3.module.css";

function VideoSection() {
  return (
    <section className={styles.video}>
      <figure>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/efa19cbe5654015e7a2d5e8bc4977253d9ce1fc7b335eeaad21fca9055d63938?placeholderIfAbsent=true&apiKey=023f6e46cf9848ceae3cfcfe04f63569"
          className={styles.img}
          alt="LSB Steganography demonstration"
        />
        <figcaption className={styles.wemadeitsobeutif}>
          Here is an example of how Lsb-steganography works!
        </figcaption>
      </figure>
    </section>
  );
}

export default VideoSection;
