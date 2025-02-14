import React from "react";
import About from "./about";
import styles from "../styles/pages/home.module.scss";
import Work from "./work";
import Projects from "./projects";
function Home() {
  return (
    <div className={styles.container}>
      <About />
      <Work />
      <Projects />
    </div>
  );
}

export default Home;
