"use client"
import React, { useState, useEffect } from "react";
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
import Heart from "../images/heart.svg"
import { TopBar } from "../components/Topbar";

interface Chef {
  id: number;
  name: string;
  deliveryTime: string;
  image: string;
  description: string;
}


const ProfilePage: React.FC = () => {
  const [favorites, setFavorites] = useState<Chef[]>([]);

  const chefs = [
    { id: 1, name: 'James Cook', deliveryTime: '25 min', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 1 description' },
    { id: 2, name: 'John Doe', deliveryTime: '35 min', image: 'https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 2 description' },
    { id: 3, name: 'Jane Doe', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/220433/pexels-photo-220433.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 3 description' },
    { id: 4, name: 'Jane Doe', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/220493/pexels-photo-220493.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 3 description' },
    { id: 5, name: 'Jegede Glory', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220743/pexels-photo-220743.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description' },
    { id: 6, name: 'Jegede Glory', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220253/pexels-photo-220253.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description' },
    { id: 7, name: 'Jegede Glory', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/245753/pexels-photo-245753.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description' },
    { id: 8, name: 'Jegede Glory', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220754/pexels-photo-220754.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description' },
  ];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteChefs') || "[]");
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteChefs', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (chef:Chef ) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === chef.id)) {
        return [...prevFavorites, chef];
      }
      return prevFavorites;
    });
  };

  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
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
        <TopBar/>
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
            <p className={styles.welcome_preamble}>We sell all sorts of meat, be it assorted, suya, asun or even pepper soup, just click the button to get your order in</p>
            <button className={styles.editButton}>Edit Profile</button>
          </div>
          <div className={styles.followers_section}>
            <p className={styles.followingWord}>Following</p>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                <p>6.4k</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                <p>856</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
            <p className={styles.followingWord}>Recommended for you</p>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                </span>
                <button className={styles.unfollowButton}>Follow</button>
            </div>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" />
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                </span>
                <button className={styles.unfollowButton}>Follow</button>
          </div>
          </div>
          </div>
          <div className={styles.HistoryOrder}>History</div>
          <div className={styles.PlaceOrder}>
            {chefs.map((chef) => (
              <div className={styles.OrderContent} key={chef.id}>
                <img
                  src={Heart.src}
                  alt=""
                  className={styles.loveImg}
                  onClick={() => addToFavorites(chef)}
                />
                {/* <Image
                  src={chef.image}
                  alt="Image"
                  width="100"
                  height="100"
                  objectFit="cover"
                  className={styles.OrderContentImage}
                /> */}
                <p className={styles.sellersName}>{chef.name}</p>
                <p className={styles.TimeDelivered}>Average Delivery Time</p>
                <p className={styles.Delivery_timeFigure}>{chef.deliveryTime}</p>
                <button className={styles.OrderNowButton}>Re-Order</button>
              </div>
            ))}
          </div>

        </section>
      </div>
      </div>
    </main>
  );
}


export default ProfilePage;