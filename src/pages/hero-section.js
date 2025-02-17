import React from "react";
import styles from "../styles/pages/hero-section.module.scss";
import profileImg from "../assets/profile.png";
import TypingEffect from "../components/typing-effect";
import { useMediaQuery } from "@react-hook/media-query";
import { mobile_breakpoint } from "../utils/constants";

const HeroSection = () => {
  const mobile = useMediaQuery(mobile_breakpoint);
  return (
    <div className={styles.home}>
      <div className={styles.textContainer}>
        <h1>
          Hi there, I’m
          {mobile && <br />}
          <span>Kinza!</span>
          <span className={styles.wave}>👋</span>
        </h1>
        <h2>
          <TypingEffect
            texts={[
              "a Software Engineer.",
              "a Frontend Developer.",
              "a QA Engineer.",
            ]}
            period={2000}
          />
        </h2>
        <p>
          Turning ideas into reality through code, creativity, and innovation.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={profileImg} alt="Kinza Shaikh" />
      </div>
    </div>
  );
};

export default HeroSection;
