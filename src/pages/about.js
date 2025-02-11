import React from "react";
import styles from "../styles/pages/about.module.scss";
function About() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>ABOUT ME</h2>
      <p className={styles.description}>
        Software engineer dedicated to creating meaningful and efficient digital
        solutions
      </p>
      <div className={styles.intro}>
        <h3 className={styles.heading}>Here's a Little About Me!</h3>
        <p className={styles.text}>
          I’m a passionate <strong>Software Engineer</strong> and a proud{" "}
          <strong>silver medalist</strong> 🥈 from{" "}
          <strong>Sukkur IBA University</strong>. With a strong foundation in{" "}
          <strong>full-stack development</strong>, I specialize in crafting
          seamless, intuitive, and visually engaging experiences across{" "}
          <strong>web</strong>, <strong>mobile</strong>, and{" "}
          <strong>desktop</strong> platforms. 🚀
          <br />
          Throughout my journey, I’ve had the privilege of collaborating with
          esteemed companies like Sound M and D, Marketplug, and Cinqd,
          contributing to innovative solutions that make an impact. I thrive on
          exploring new technologies and pushing the boundaries of software
          development.
          <br />
          <br />
          Let’s connect and build something remarkable together! ✨
        </p>
      </div>
      <div className={styles.intro}>
      <h3 className={styles.heading}>Skills</h3>
      </div>
    </div>
  );
}

export default About;
