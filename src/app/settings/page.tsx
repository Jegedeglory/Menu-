
import React from "react";
import styles from "./page.module.css";
import Logo from "../../../public/Logo.png";
import Menu from "../components/DashboardColored.svg";
import Bid from "../components/bid.svg";
import Profile from "../components/Profile.svg";
import Settings from "../components/settingColored.svg";
import Favorites from "../components/heart.svg";
import Moon from "../components/moon.svg";
import Notification from "../components/bell.svg";
import Avatar from "../../../public/avatar.png"
import Link from "next/link";



const SettingsPage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_Content}>
          <span className={styles.Logo}>
            <div>
              <img src={Logo.src} alt="Logo" />
            </div>
          </span>
          <Link href="/">
            <div>
              <img src={Menu.src} alt="Logo" />
            </div>
          </Link>
          <div>
            <img src={Bid.src} alt="Logo" />
          </div>
          <Link href="/profile">
            <div>
              <img src={Profile.src} alt="Logo" />
            </div>
          </Link>
          <Link href="/favorite">
            <div>
              <img src={Favorites.src} alt="Logo" />
            </div>
          </Link>
          <Link href="/settings">
            <div>
              <img src={Settings.src} alt="Logo" />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.main_content}>
        <div className={styles.topBar}><input type="text" placeholder="Search here" className={styles.search} />
          <div className={styles.AvatarMenu}>
            <img src={Moon.src} alt="toggle Theme" />
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

        </section>

      </div>
    </main>
  );
}


export default SettingsPage;