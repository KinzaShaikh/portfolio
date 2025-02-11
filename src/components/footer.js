import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/footer.module.scss";
import { menuItems } from "../utils/constants";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.innerCont}>
        <div className={styles.menuItemContainer}>
          {menuItems.map((item) => {
            return (
                <Link to={item.path} className={styles.menuItem} key={item.id}>
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
