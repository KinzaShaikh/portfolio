import React from "react";
import styles from "../styles/pages/work.module.scss";
import sound from "../assets/soundMandD.png";
import marketplug from "../assets/marketplug.png";
import fiverr from "../assets/icons8-fiverr.svg";
function Work() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Work Experience</h2>
      <p className={styles.description}>Highlights of my journey so far</p>
      <div className={styles.cards}>
        <div className={styles.experienceCard}>
          <div className={styles.company}>
            <img src={sound} className={styles.companyLogo} />
            <span className={styles.companyName}>Sound M and D LLC</span>
          </div>
          <div className={styles.experienceDetails}>
            <div className={styles.heading}>Fullstack Developer</div>
            <ul>
              <li>Worked with the core team on PrivateWeb7 Project</li>
              <li>Performed quality assurance and manual testing</li>
            </ul>
          </div>
          <div className={styles.timePeriod}>August 2023 - November 2024</div>
        </div>

        <div className={styles.experienceCard}>
          <div className={styles.company}>
            <img src={marketplug} className={styles.companyLogo} />
            <span className={styles.companyName}>Marketplug</span>
          </div>
          <div className={styles.experienceDetails}>
            <div className={styles.heading}>Frontend Developer</div>
            <ul>
              <li>
                Worked on their core code development using React and Typescript
              </li>
              <li>
                Worked on documentation, requirement analysis and CI/CD pipeline
              </li>
            </ul>
          </div>
          <div className={styles.timePeriod}>October 2022 – April 2023</div>
        </div>

        <div className={styles.experienceCard}>
          <div className={styles.company}>
            <img src={fiverr} className={styles.companyLogo} />
            <span className={styles.companyName}>Fiverr.com</span>
          </div>
          <div className={styles.experienceDetails}>
            <div className={styles.heading}>Software Engineer</div>
            <ul>
              <li>Working as Desktop, Web and Mobile app Developer</li>
              <li>
                Hand on Unified Modeling Language Design and Database Design
              </li>
            </ul>
          </div>
          <div className={styles.timePeriod}>Aug. 2020 – Present</div>
        </div>
      </div>
    </div>
  );
}

export default Work;
