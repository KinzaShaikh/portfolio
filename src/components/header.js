import React, { useEffect, useState } from "react";
import styles from "../styles/components/header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { menuItems, mobile_breakpoint } from "../utils/constants";
import Hamburger from "hamburger-react";
import lightMode from "../assets/light-mode.svg";
import darkMode from "../assets/dark-mode.svg";
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
  const handleTabClick = (tabId) => {
    setActiveItem(tabId);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const theme = true;
  const [selectedTheme, setSelectedTheme] = useState(() => {
    // Set theme to "dark" if there's no theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme : "dark";
  });
  useEffect(() => {
    if (theme) {
      setSelectedTheme("dark");
    } else {
      setSelectedTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    if (selectedTheme === "dark") {
      document.querySelector("body").setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.querySelector("body").setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  }, [selectedTheme]);
  return (
    <>
      <div
        className={`${styles.mainContainer} ${
          scrollPosition > 0 ? styles.scrolled : ""
        }`}
      >
        <Link
          style={{
            color: "#3f7bc9",
            fontSize: 26,
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 600,
            textDecoration: "none",
          }}
          to={"/"}
        >
          {"<KINZA/>"}
        </Link>
        {!isMobile && (
          <div className={styles.menuContainer}>
            <>
              {menuItems.map((item) => {
                return (
                  <div className={styles.menuItemContainer}>
                    <Link to={item.path} className={styles.menuItem}>
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

            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Resume
            </a>
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
                  onClick={() => {
                    handleTabClick(item.id);
                    handleItemClick(item.path);
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

            <a
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
