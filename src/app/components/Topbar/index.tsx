
import React, { useState, useEffect } from "react";

import styles from "./topbar.module.css";
// import Avatar from "@public/images/avatar.png";
import Link from "next/link";

export const TopBar = () => {
    const [theme, setTheme] = useState("light");
    const [profilePic, setProfilePic] = useState<string>(() => {
        return localStorage.getItem("profilePic") || "/images/avatar.png";
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
                <img src="/images/moon.svg" alt="toggle Theme" />
                <img src="/images/bell.svg" alt="Notification" />
                <img src="/images/Moon.svg" alt="Profile Image" className={styles.profilePicture} />
            </div>
        </div>
        <div className={styles.topBarWithLogo}>
            <span className={styles.searchWithLogo}>

                         <Link href="/">
                <span className={`${styles.Logo} ${styles.LogoOutside}`}>
                    <div>
                        <img src="/images/Logo.png" alt="Logo" />
                    </div>
                </span>
            </Link>
            <input type="text" placeholder="Search here" className={styles.search} />
            </span>
            <div className={styles.AvatarMenu}>
                <img src="./images/moon.svg" alt="toggle Theme" />
                <img src="./images/bell.svg" alt="Notification" />
                <img src="/images/avatar.png" alt="Profile Image" className={styles.profilePicture} />
            </div>
        </div>

        </>
    )
}