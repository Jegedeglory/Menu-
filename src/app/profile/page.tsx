
import React from "react";
import styles from "./page.module.css";
import Logo from "../images/Logo.png";
import Menu from "../images/DashboardColored.svg";
import Bid from "../images/bid.svg";
import Profile from "../images/ProfileColored.svg";
import Settings from "../images/setting.svg";
import Favorites from "../images/heart.svg";
import Moon from "../images/moon.svg";
import  Notification from "../images/bell.svg";
import Avatar from "../images/avatar.png"
import Link from "next/link";



const ProfilePage: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_Content}>
          <span className={styles.Logo}>
            <div>
            <img src={ Logo.src } alt="Logo" />
            </div>
            </span>
            <Link href="/">
          <div>
            <img src={ Menu.src } alt="Logo" />
            </div>
            </Link>
          <div>
            <img src={ Bid.src } alt="Logo" />
            </div>
          <Link href="/profile">
          <div>
            <img src={ Profile.src } alt="Logo" />
            </div>
          </Link>
          <Link href="/favorite">
          <div>
            <img src={ Favorites.src } alt="Logo" />
            </div>
            </Link>
            <Link href="/settings">
          <div>
            <img src={ Settings.src } alt="Logo" />
            </div>
            </Link>
            </div>
            </div>
      <div className={styles.main_content}>
        <div className={styles.topBar}><input type="text" placeholder="Search here" className={styles.search} />
        <div className={styles.AvatarMenu}> 
        <img src={Moon.src} alt="toggle Theme" />
        <img src={ Notification.src } alt="Notification" />
        <img src={Avatar.src} alt="Profile Image" />
        </div>
        </div>

        <section className={styles.Section_Content}>
        <div className={styles.Topic_options}>
            <p className={styles.profileDisplay}>Profile</p>
            <div className={styles.profile_Content}>
            <span className={styles.profileOptions}>Home</span>
            <span className={styles.profileOptions}>Profile</span>
            </div>
          </div>

          <div className={styles.AllProfile}>
          <div className={styles.profile_section}>
            <img src={Avatar.src} alt="Profile Image" />
            <p className={styles.welcome}>Welcome, Jegede Glory</p>
            <p className={styles.welcome_preamble}>Looks like you've not placed your order yet, click on patronize to get your belly filled</p>
            <button className={styles.editButton}>Edit Profile</button>
          </div>
          <span className={styles.followers_section}>
            <p>Following</p>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Jegs pasteries</p>
                <p>6.4k</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Sugar fams</p>
                <p>856</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
          </span>
          </div>
        </section>

      </div>
    </main>
  );
}


export default ProfilePage;