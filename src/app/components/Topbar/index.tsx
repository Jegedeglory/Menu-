
import React, { useState, useEffect } from "react";

import styles from "./topbar.module.css";
import Moon from "../../images/Moon.svg";
import Notification from "../../images/bell.svg";
import Avatar from "../../images/avatar.png";
import Link from "next/link";
import Logo from "../../images/Logo.png"

export const TopBar = () => {
    const [theme, setTheme] = useState("light");
    const [profilePic, setProfilePic] = useState<string>(() => {
        return localStorage.getItem("profilePic") || Avatar.src;
      });


    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        const storedProfilePic = localStorage.getItem("profilePic");
        if (storedProfilePic) {
          setProfilePic(storedProfilePic);
        }
      }, []);
  
    return (
        <>
        <div className={styles.topBar}>
            <input type="text" placeholder="Search here" className={styles.search} />
            <div className={styles.AvatarMenu}>
                <img src={Moon.src} alt="toggle Theme" onClick={toggleTheme} />
                <img src={Notification.src} alt="Notification" />
                <img src={profilePic} alt="Profile Image" className={styles.profilePicture} />
            </div>
        </div>
        <div className={styles.topBarWithLogo}>
            <span className={styles.searchWithLogo}>

                         <Link href="/">
                <span className={`${styles.Logo} ${styles.LogoOutside}`}>
                    <div>
                        <img src={Logo.src} alt="Logo" />
                    </div>
                </span>
            </Link>
            <input type="text" placeholder="Search here" className={styles.search} />
            </span>
            <div className={styles.AvatarMenu}>
                <img src={Moon.src} alt="toggle Theme" />
                <img src={Notification.src} alt="Notification" />
                <img src={profilePic} alt="Profile Image" className={styles.profilePicture} />
            </div>
        </div>

        </>
    )
}