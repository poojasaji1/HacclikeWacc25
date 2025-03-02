"use client";
import * as React from "react";
import styles from "./ImageGallerySection.module.css";

const GalleryImage = ({ src, alt }) => (
  <figure className={styles.imageItem}>
    <img src={src} alt={alt} className={styles.img} />
  </figure>
);

const GalleryGrid = () => (
  <section className={styles.imageGrid}>
    <GalleryImage
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9cfda41119e6d3c2c65961bdbb5f6440cc5a5bce"
      alt="Night scene with colorful lights reflected in water"
    />
    <GalleryImage
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/768131b1af66dc62db0625e16c06fc8520b3f2be"
      alt="Colorful garden flowers"
    />
    <GalleryImage
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9498d3877ed53638a519a6141d1b12dd778971b"
      alt="Colorful umbrellas"
    />
    <GalleryImage
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/bdf9711ec5b358a06ce43cda22e159a81f79d542"
      alt="Colorful parrots"
    />
  </section>
);

const GalleryHeading = () => (
  <h1 className={styles.heading}>
    Here, you can choose what cover image you'd like!
  </h1>
);

function ImageGallerySection() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <main className={styles.container}>
        <GalleryHeading />
        <GalleryGrid />
      </main>
    </>
  );
}

export default ImageGallerySection;
