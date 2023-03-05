import Image from "next/image";
import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src="/icons/logo-banner.svg"
        alt="logo banner"
        width={200}
        height={36}
      />

      <div className={styles.menu}>
        <ul>
          <li>Blog</li>
          <li>Socials</li>
          <li>Past Socials</li>
          <li>Clubs</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
