import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>StegoStorage</h1>
      <nav className={styles.navLinks}>
        <a href="#how-it-works" className={styles.navItem}>
          How it Works
        </a>
        <a href="#resources" className={styles.navItem}>
          Resources
        </a>
        <a href="#about" className={styles.navItem}>
          About Us
        </a>
        <a href="#contact" className={styles.navItem}>
          Contact Us
        </a>
      </nav>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6efff823489328ed02ac73bb8932fda4b393312f"
        alt="Decorative header image"
        className={styles.headerImage}
      />
    </header>
  );
}

export default Header;
