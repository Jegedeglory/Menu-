"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Logo from "../images/Logo.png";
import Menu from "../images/DashBoard.svg";
import Bid from "../images/bid.svg";
import Profile from "../images/Profile.svg";
import Settings from "../images/settingColored.svg";
import Favorites from "../images/heart.svg";
import Moon from "../images/moon.svg";
import Notification from "../images/bell.svg";
import Avatar from "../images/avatar.png"
import Link from "next/link";



const SettingsPage: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.id === 'toggleOn');
  };
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

          {/* <div className={styles.settingsOptions}>
            <p className={styles.editProfileText}>Edit Profile</p>
            <p>Notification</p>
            <p>Security</p>
            <p>Help</p>
          </div>

          <div className={styles.editProfile}>
            <div className={styles.editProfileNames}>
              <div className={styles.editProfileInputArea}><p>First Name</p>
              <input type="text" placeholder="First Name" className={styles.editProfileInput} /></div>
              <div className={styles.editProfileInputArea}><p>Last Name</p>
              <input type="text" placeholder="Last Name" className={styles.editProfileInput}/></div>
            </div>
            <div className={styles.editProfileInputArea}><p>Email</p>
              <input type="email" placeholder="you@email.com" className={styles.editProfileInput} /></div>
            <div className={styles.editProfileInputArea}><p>Address</p>
              <input type="email" placeholder="No.33062 Zboncak isle" className={styles.editProfileInput} /></div>
            <div className={styles.editProfileInputArea}><p>Password</p>
              <input type="password" placeholder="******" className={styles.editProfileInput} /></div>
              <div className={styles.saveChangesButton}><button className={styles.cancelChanges}>Cancel</button>
              <button className={styles.save}>Save</button></div>
          </div> */}


<div className={styles.settingsOptions}>
            <p>Edit Profile</p>
            <p className={styles.editProfileText}>Notification</p>
            <p>Security</p>
            <p>Help</p>
          </div>

          <div className={styles.editProfile}>
            {/* 
          <div className={styles.toggleSwitchContainer}>
      <input
        type="checkbox"
        id="toggle-on"
        name="toggle"
        className={styles.checkbox}
        checked={!isChecked}
        onChange={handleToggleChange}
      />
      <label htmlFor="toggle-on" className={`${styles.toggleLabel} ${styles.toggleOnLabel}`}>
        On
      </label>
    </div>
    <div className={styles.checkboxArea}>
      <input
         type="checkbox"
         id="toggle-off"
         className={styles.checkbox}
         name="toggle"
         checked={!isChecked}
         onChange={handleToggleChange}
         />
      <label  htmlFor="toggle-off" className={`${styles.toggleLabel} ${styles.toggleOffLabel}`}>
        Off
      </label>
    </div>
    </div>
  */}
            {/* <div className={styles.checkboxInput}>

  <label className={styles.switch}>
  <input type="checkbox"/>
  <span className={styles.slider}></span>
</label>

<label className={styles.switch}>
  <input type="checkbox"/>
  <span className={styles.sliderRound}></span>
</label>
<div className={styles.checkboxArea}>
<p>Delivery completed</p>
<p>Alert me when my delivery is complete</p>
    </div> 
    </div>  */}
              <div className={styles.saveChangesButton}><button className={styles.cancelChanges}>Cancel</button>
              <button className={styles.save}>Save</button></div>
          </div>
        </section>

      </div>
    </main>
  );
}


export default SettingsPage;