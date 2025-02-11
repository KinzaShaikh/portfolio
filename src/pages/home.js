import React from "react";
import About from "./about";
import styles from "../styles/pages/home.module.scss";
function Home() {
  return (
    <div className={styles.container}>
      <About />
    </div>
  );
}

export default Home;
