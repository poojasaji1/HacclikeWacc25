"use client";
import React from "react";
import styles from "./TeamSection.module.css";

const TeamMember = ({ name, imageUrl, altText }) => {
  return (
    <article className={styles.teamMember}>
      <figure className={styles.profileImage}>
        <img src={imageUrl} alt={altText} className={styles.img} />
      </figure>
      <h2 className={styles.memberName}>{name}</h2>
      <div className={styles.socialLinks}>
        <i className="ti ti-mail" aria-label="Email" role="button" />
        <i
          className="ti ti-brand-linkedin"
          aria-label="LinkedIn"
          role="button"
        />
        <i className="ti ti-brand-github" aria-label="GitHub" role="button" />
      </div>
    </article>
  );
};

export default TeamMember;
