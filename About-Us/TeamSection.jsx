"use client";
import React from "react";
import styles from "./TeamSection.module.css";
import TeamMember from "./TeamMember";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Shreeya Garg",
      imageUrl: "https://placehold.co/200x200/334455/334455",
      altText: "Shreeya Garg profile photo",
    },
    {
      name: "Jenise Bowling",
      imageUrl: "https://placehold.co/200x200/223344/223344",
      altText: "Jenise Bowling profile photo",
    },
    {
      name: "Pooja Saji",
      imageUrl: "https://placehold.co/200x200/445566/445566",
      altText: "Pooja Saji profile photo",
    },
    {
      name: "Agni Athreya",
      imageUrl: "https://placehold.co/200x200/556677/556677",
      altText: "Agni Athreya profile photo",
    },
  ];

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
      <main className={styles.container}>
        <header className={styles.header}>
          This project was made by Shreeya Garg, Jenise Bowling, Pooja Saji, and
          Agni Athreya for the Georgia Tech W@CC 2025 Competition.
        </header>
        <section className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              imageUrl={member.imageUrl}
              altText={member.altText}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default TeamSection;
