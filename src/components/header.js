import React, { useEffect, useState } from "react";
import styles from "../styles/components/header.module.scss";
import { useNavigate } from "react-router-dom";
import { Link, scroller } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { menuItems, mobile_breakpoint } from "../utils/constants";
import Hamburger from "hamburger-react";
import lightMode from "../assets/light-mode.svg";
import darkMode from "../assets/dark-mode.svg";
const savedTheme = localStorage.getItem("theme") || "dark";
document.body.setAttribute("data-theme", savedTheme);
function Header() {
  const navigation = useNavigate();
  const isMobile = useMediaQuery(mobile_breakpoint);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      setScrollPosition(currentPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleItemClick = (path) => {
    navigation(path);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [selectedTheme, setSelectedTheme] = useState(savedTheme);

  useEffect(() => {
    document.body.setAttribute("data-theme", selectedTheme);
    localStorage.setItem("theme", selectedTheme);
  }, [selectedTheme]);

  const toggleTheme = () => {
    setSelectedTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <div
        className={`${styles.mainContainer} ${
          scrollPosition > 0 ? styles.scrolled : ""
        }`}
      >
        <RouterLink
          style={{
            color: "#3f7bc9",
            fontSize: 28,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            textDecoration: "none",
            cursor: "pointer",
          }}
          to={"/"}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/";
          }}
        >
          {"<KINZA/>"}
        </RouterLink>
        {!isMobile && (
          <div className={styles.menuContainer}>
            <>
              {menuItems.map((item) => {
                return (
                  <div className={styles.menuItemContainer}>
                    <Link
                      key={item.id}
                      to={item.path}
                      className={styles.menuItem}
                      onClick={(e) => {
                        e.preventDefault();
                        window.history.pushState(null, "", `#${item.path}`);
                        scroller.scrollTo(item.path, {
                          smooth: true,
                          duration: 600,
                          offset: -80,
                        });
                      }}
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              })}
            </>
          </div>
        )}
        {isMobile ? (
          <div className={styles.rightContainer}>
            <div onClick={toggleMenu}>
              <Hamburger size={24} color="#505F79" />
            </div>
          </div>
        ) : (
          <div className={styles.rightSection}>
            {selectedTheme == "dark" ? (
              <img
                src={lightMode}
                onClick={() => {
                  setSelectedTheme("light");
                }}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src={darkMode}
                onClick={() => {
                  setSelectedTheme("dark");
                }}
                style={{ cursor: "pointer" }}
              />
            )}

            {/* <a
              href="https://drive.google.com/file/d/1hDkYWNTvfQtwaG041VZHIGT9rh6O2Wb3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Resume
            </a> */}
          </div>
        )}
      </div>
      {isMobile && (
        <div
          className={`${styles.menuContainer} ${
            isOpen ? `${styles.open}` : ""
          }`}
        >
          <div className={styles.itemsContainer}>
            {menuItems.map((item) => {
              return (
                <div
                  className={`${styles.item} ${
                    activeItem === item.id ? styles.activeItem : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor jump
                    window.history.pushState(null, "", `#${item.path}`);

                    scroller.scrollTo(item.path, {
                      smooth: true,
                      duration: 600,
                      offset: -80,
                    });
                  }}
                >
                  <div className={styles.text}>{item.name}</div>
                </div>
              );
            })}
          </div>
          <div className={styles.buttonsContainer}>
            {selectedTheme == "dark" ? (
              <img
                src={lightMode}
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <img
                src={darkMode}
                onClick={toggleTheme}
                style={{ cursor: "pointer" }}
              />
            )}

            {/* <a
              target="_blank"
              href="https://drive.google.com/file/d/1hDkYWNTvfQtwaG041VZHIGT9rh6O2Wb3/view?usp=sharing"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Resume
            </a> */}
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
