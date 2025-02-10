import React from "react";
import styles from "../styles/pages/default-layout.module.scss";
import Header from "../components/header";
import Footer from "../components/footer";
function DefaultLayout({ component: Component, top = "0px", left = "0px" }) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Header/>
      </div>
      <div style={{ paddingTop: top, paddingLeft: left }}>
        <Component />
      </div>
      <div className={styles.footer}>
        <Footer/>
      </div>
    </div>
  );
}

export default DefaultLayout;
