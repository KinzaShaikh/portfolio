import React from "react";
import styles from "../styles/pages/about.module.scss";
import html from '../assets/html5.svg';
import css from '../assets/css3.svg';
import js from '../assets/javascript.svg';
import ts from '../assets/typescript.svg';
import react from '../assets/react.svg';
import redux from '../assets/redux.svg';
import nextjs from '../assets/nextjs.svg';
import sass from '../assets/sass.svg';
import tailwind from '../assets/tailwind.svg';
import node from '../assets/nodejs.svg';
import mongo from '../assets/mongodb.svg';
import git from '../assets/git.svg';
import github from '../assets/github.svg';
import vscode from '../assets/vscode.svg';

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
      <h3 className={styles.heading}>Tech Stack</h3>
      <div className={styles.skills}>
        <img className={styles.img} src={html}/>
        <img className={styles.img} src={css}/>
        <img className={styles.img} src={js}/>
        <img className={styles.img} src={ts}/>
        <img className={styles.img} src={react}/>
        <img className={styles.img} src={redux}/>
        <img className={styles.image} src={nextjs}/>
        <img className={styles.img} src={sass}/>
        <img className={styles.img} src={tailwind}/>
        <img className={styles.img} src={node}/>
        <img className={styles.img} src={mongo}/>
        <img className={styles.img} src={git}/>
        <img className={styles.image} src={github}/>
        <img className={styles.img} src={vscode}/>
      </div>
      </div>
    </div>
  );
}

export default About;
