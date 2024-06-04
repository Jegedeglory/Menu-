"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import Logo from "../images/Logo.png";
import Menu from "../images/DashBoard.svg";
import Bid from "../images/bid.svg";
import Profile from "../images/Profile.svg";
import Settings from "../images/settingColored.svg";
import Favorites from "../images/heart.svg";
import Moon from "../images/moon.svg";
import Notification from "../images/bell.svg";
import Avatar from "../images/avatar.png";
import Link from "next/link";

const SettingsPage: React.FC = () => {
  const [activeOption, setActiveOption] = useState<string | null>(null);
  const [activeOption1, setActiveOption1] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };
  const handleOptionClick1 = (option: string) => {
    setActiveOption1(option);
  };

  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
        <div className={styles.sidebar}>
          <div className={styles.sidebar_Content}>
            <span className={styles.Logo}>
              <div>
                <img src={Logo.src} alt="Logo" />
              </div>
            </span>
            <Link href="/">
              <div>
                <img src={Menu.src} alt="Menu" />
              </div>
            </Link>
            <div>
              <img src={Bid.src} alt="Bid" />
            </div>
            <Link href="/profile">
              <div>
                <img src={Profile.src} alt="Profile" />
              </div>
            </Link>
            <Link href="/favorite">
              <div>
                <img src={Favorites.src} alt="Favorites" />
              </div>
            </Link>
            <Link href="/settings">
              <div>
                <img src={Settings.src} alt="Settings" />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.main_content}>
          <div className={styles.topBar}>
            <input type="text" placeholder="Search here" className={styles.search} />
            <div className={styles.AvatarMenu}>
              <img src={Moon.src} alt="Toggle Theme" />
              <img src={Notification.src} alt="Notification" />
              <img src={Avatar.src} alt="Profile Image" />
            </div>
          </div>
          <section className={styles.Section_Content}>
            <div className={styles.Topic_options}>
              <p className={styles.profileDisplay}>Settings</p>
              <div className={styles.profile_Content}>
                <span className={styles.profileOptions}>Home</span>
                <span className={styles.profileOptions}>Setting</span>
              </div>
            </div>
            <div className={styles.settingsOptions}>
              <p
                className={`${styles.editProfileText} ${activeOption === "Edit Profile" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Edit Profile")}
              >
                Edit Profile
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption1 === "Notification" ? styles.active : ""}`}
                onClick={() => handleOptionClick1("Notification")}
              >
                Notification
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption === "Security" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Security")}
              >
                Security
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption === "Help" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Help")}
              >
                Help
              </p>
            </div>
            {activeOption === "Edit Profile" && (
              <div className={styles.editProfile}>
                <div className={styles.editProfileNames}>
                  <div className={styles.editProfileInputArea}>
                    <p>First Name</p>
                    <input type="text" placeholder="First Name" className={styles.editProfileInput} />
                  </div>
                  <div className={styles.editProfileInputArea}>
                    <p>Last Name</p>
                    <input type="text" placeholder="Last Name" className={styles.editProfileInput} />
                  </div>
                </div>
                <div className={styles.editProfileInputArea}>
                  <p>Email</p>
                  <input type="email" placeholder="you@email.com" className={styles.editProfileInput} />
                </div>
                <div className={styles.editProfileInputArea}>
                  <p>Address</p>
                  <input type="text" placeholder="No.33062 Zboncak isle" className={styles.editProfileInput} />
                </div>
                <div className={styles.editProfileInputArea}>
                  <p>Password</p>
                  <input type="password" placeholder="******" className={styles.editProfileInput} />
                </div>
                <div className={styles.saveChangesButton}>
                  <button className={styles.cancelChanges}>Cancel</button>
                  <button className={styles.save}>Save</button>
                </div>
              </div>
            )}
            {activeOption1 === "Notification" && (
              <div className={styles.editProfile}>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p>Delivery completed</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
