import React, { useState } from "react";
import styles from "../styles/pages/projects.module.scss";
import sound from "../assets/pw7_1.png";
import pw7_1 from "../assets/pw7_1.png";
import pw7_2 from "../assets/pw7_2.png";
import pw7_3 from "../assets/pw7_3.png";
import pw7_4 from "../assets/pw7_4.png";
import RA_1 from "../assets/RA_1.jpg";
import RA_2 from "../assets/RA2.jpg";
import RA_3 from "../assets/RA3.jpg";
import RA_4 from "../assets/RA4.jpg";
import RA_5 from "../assets/RA5.jpg";
import RA_6 from "../assets/RA6.jpg";
import RA_7 from "../assets/RA7.jpg";
import RA_8 from "../assets/RA8.jpg";
import alumni_1 from "../assets/alumni_website1.PNG";
import alumni_2 from "../assets/alumni_website2.PNG";
import alumni_3 from "../assets/alumni_website3.PNG";
import alumni_4 from "../assets/alumni_website4.PNG";
import pirate_1 from "../assets/pirate_qr1.jpg";
import pirate_2 from "../assets/pirate_qr2.jpg";
import pirate_3 from "../assets/pirate_qr3.jpg";
import marketplug from "../assets/marketplug.png";
import fiverr from "../assets/github.svg";
import github from "../assets/github.svg";
function Projects() {
  const projects = [
    {
      title: "Private Web7",
      images: [pw7_1, pw7_2, pw7_3, pw7_4],
      description:
        "PrivateWeb7 utilizes cutting-edge decentralized, end-to-end encryption to guarantee utmost user privacy and data security. With robust multi-factor authentication and continuous 24/7 monitoring, it effectively thwarts any malicious activities, ensuring a safe and secure online environment. This innovative platform plays a crucial role in protecting online interactions from pervasive data surveillance and privacy breaches, making it indispensable in today's digital landscape. If you'd like to explore the project further, you can visit the link.",
      techStack: [
        "ReactJS",
        "NodeJS",
        "SCSS",
        "Python-Fast API",
        "Web Sockets",
        "Postgres",
      ],
      githubLink: "",
    },
    {
      title: "Alumni Website for University",
      images: [alumni_3, alumni_1, alumni_4, alumni_1],
      description:
        "To maintain Alumni record, we developed website with MERN technology. Semantic-UI library was used fascinate the front-end. It has Dashboard to add, remove, search, update alumni members. If you'd like to explore the code on GitHub, visit the project repository.",
      techStack: ["ReactJS", "NodeJS", "MongoDB", "ExpressJS"],
      githubLink: "https://github.com/KinzaShaikh/Alumni-Website",
    },
    {
      title: "Religious Assistant",
      images: [RA_1, RA_2, RA_3, RA_4, RA_5, RA_6, RA_7, RA_8],
      description:
        "The Religious Assistant app is designed to meet the requirements of Muslim and Hindu users alike. It provides a range of essential features, such as locating nearby Mosques and Temples, accurate prayer timings for each mosque, tracking of missed prayers and fasts, and Zakat calculations. For children, the app offers engaging games to learn Namaz. Additionally, users can access Qibla direction information, receive alerts for vegetarian and non-vegetarian days, as well as notifications for funeral arrangements, Eid prayers, and donation drives.",
      techStack: ["React Native", "NodeJS", "MongoDB", "ExpressJS"],
      githubLink: "https://github.com/Religious-Assistant",
    },
    {
        title: "Pirate QR",
        images: [pirate_1, pirate_2, pirate_3],
        description:
          "Pirate QR is a web application designed to simplify the process of attaching photos and videos to QR codes. With this app, users can scan any QR code, such as those found on products, and easily associate multimedia content with it. The attached media can then be accessed by anyone who scans the same QR code using the app. If you'd like to explore the project further, you can visit the link.",
        techStack: ["React Native", "NodeJS"],
        githubLink: "",
      },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>PROJECTS</h2>
      <p className={styles.description}>Highlights of my journey so far</p>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}
const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className={styles.projectCard}>
      <div className={styles.imageSlider}>
        <img src={project.images[currentImage]} alt={project.title} />
        <div className={styles.sliderNav}>
          <button onClick={handlePrev}>◀</button>
          <button onClick={handleNext}>▶</button>
        </div>
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.title}>{project.title}</div>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.techStack}>
          {project.techStack.map((tech, index) => (
            <span key={index} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>
        {
            project.githubLink && <a
            href={project.githubLink}
            className={styles.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" /> View on GitHub
          </a>
        }
        
      </div>
    </div>
  );
};

export default Projects;
