import React from "react";
import styles from "../styles/components/footer.module.scss";
import { menuItems } from "../utils/constants";
import { Link, scroller } from "react-scroll";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.innerCont}>
        <div className={styles.menuItemContainer}>
          {menuItems.map((item) => {
            return (
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
            );
          })}
        </div>
        <div className={styles.text}>
          Copyright ©2025 Kinza Kiran | All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
