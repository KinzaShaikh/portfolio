import React from "react";
import { Element } from "react-scroll";
import About from "./about";
import styles from "../styles/pages/home.module.scss";
import Work from "./work";
import Projects from "./projects";
import ContactUs from "./contact-us";
import HeroSection from "./hero-section";
function Home() {
  return (
    <div className={styles.container}>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
    </div>
  );
}

export default Home;
