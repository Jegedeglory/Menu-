"use client"
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Avatar from "../images/avatar.png"
import Link from "next/link";
import Heart from "../images/heart.svg"
import { TopBar } from "../components/Topbar";
import { SideBar } from "../components/Sidebar";

interface Chef {
  id: number;
  name: string;
  deliveryTime: string;
  image: string;
  description: string;
}


const ProfilePage: React.FC = () => {
  const [favorites, setFavorites] = useState<Chef[]>([]);
  const [profilePic, setProfilePic] = useState<string>(() => {
    return localStorage.getItem("profilePic") || Avatar.src;
  });

  const [firstName, setFirstName] = useState<string>(() => {
    return localStorage.getItem("firstName") || "Jegede";
  });
  const [lastName, setLastName] = useState<string>(() => {
    return localStorage.getItem("lastName") || "Glory";
  });
  const [bio, setBio] = useState<string>(() => {
    return localStorage.getItem("bio") || "Looks like you've not placed your order yet, click on patronize to get your belly filled";
  });


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

  useEffect(() => {
    const storedProfilePic = localStorage.getItem("profilePic");
    if (storedProfilePic) {
      setProfilePic(storedProfilePic);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
        <SideBar/>
      <div className={styles.main_content}>
        <TopBar/>
        <section className={styles.Section_Content}>
        <div className={styles.Topic_options}>
            <p className={styles.profileDisplay}>Profile</p>
            <div className={styles.profile_Content}>
            <Link href="/">
              <div className={styles.profileOptions}>Home</div>
              </Link>
            <span className={styles.profileOptions}>Profile</span>
            </div>
          </div>

          <div className={styles.AllProfile}>
          <div className={styles.profile_section}>
          <img src={profilePic} alt="Profile Image" className={styles.profilePicture} />
            <p className={styles.welcome}>Welcome, <span className={styles.firstNlastName}>{firstName}</span> <span className={styles.firstNlastName}>{lastName}</span></p>
            <p className={styles.welcome_preamble}>{bio}</p>
            <Link href="/settings?option=EditProfile"><button className={styles.editButton}>Edit Profile
            </button>
            </Link>
          </div>
          <div className={styles.followers_section}>
            <p className={styles.followingWord}>Following</p>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" height={50} width={50}/>
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                <p>6.4k</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" height={50} width={50}/>
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                <p>856</p></span>
                <button className={styles.unfollowButton}>Unfollow</button>
            </div>
            <p className={styles.followingWord}>Recommended for you</p>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" height={50} width={50}/>
                <span className={styles.followers_description}>
                <p>Glory's pasteries and groceries</p>
                </span>
                <button className={styles.unfollowButton}>Follow</button>
            </div>
            <div className={styles.followers}>
                    <img src={ Avatar.src } alt="Profile image" height={50} width={50}/>
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