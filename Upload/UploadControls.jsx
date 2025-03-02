import React from "react";
import styles from "./UploadControls.module.css";

const ImageIcon = () => (
  <svg
    width="46"
    height="52"
    viewBox="0 0 46 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.imageIcon}
  >
    <g opacity="0.6" filter="url(#filter0_d_5850_500)">
      <path
        d="M9.37987 43.4632C8.34808 43.4632 7.457 43.0695 6.70661 42.2822C5.98749 41.4607 5.62793 40.4851 5.62793 39.3554V10.6009C5.62793 9.47131 5.98749 8.51282 6.70661 7.7255C7.457 6.90394 8.34808 6.49316 9.37987 6.49316H35.6434C36.6752 6.49316 37.5507 6.90394 38.2698 7.7255C39.0202 8.51282 39.3954 9.47131 39.3954 10.6009V39.3554C39.3954 40.4851 39.0202 41.4607 38.2698 42.2822C37.5507 43.0695 36.6752 43.4632 35.6434 43.4632H9.37987ZM9.37987 39.3554H35.6434V10.6009H9.37987V39.3554ZM11.2558 35.2476H33.7675L26.7326 24.9782L21.1047 33.1937L16.8837 27.0321L11.2558 35.2476ZM9.37987 39.3554V10.6009V39.3554Z"
        fill="#FEF7FF"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5850_500"
        x="-4"
        y="0.331543"
        width="53.0234"
        height="57.2935"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5850_500"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5850_500"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

const UploadControls = () => {
  return (
    <section className={styles.uploadSection}>
      <button className={styles.playButton}>
        <i className="ti ti-player-play" />
      </button>
      <button className={styles.uploadButton}>Upload</button>
      <button className={styles.uploadButton}>Upload</button>
      <div className={styles.iconWrapper}>
        <ImageIcon />
      </div>
    </section>
  );
};

export default UploadControls;
