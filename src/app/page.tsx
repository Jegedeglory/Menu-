"use client"

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Moon from "./images/moon.svg";
import Notification from "./images/bell.svg";
import Avatar from "./images/avatar.png";
import Image from "next/image";
import { SideBar } from "./components/Sidebar";
import { TopCards } from "./components/Topcards";
import { TopBar } from "./components/Topbar";
import Heart from "./images/bytesizeHeart.svg";

interface Chef {
  id: number;
  name: string;
  deliveryTime: string;
  image: string;
  description: string;
}
const Home: React.FC = () => {
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
      <SideBar />
      <div className={styles.main_content}>
        <TopBar />
        <section className={styles.Section_Content}>
          <TopCards />
          <div className={styles.Topic_options}>
            <p className={styles.trendingNow}>Trending Now</p>
            <div className={styles.trending_Content}>
              <span className={styles.AllOptions}>All</span>
              <span className={styles.OtherOptions}>Food</span>
              <span className={styles.OtherOptions}>Drinks</span>
            </div>
          </div>

          <div className={styles.PlaceOrder}>
            {chefs.map((chef) => (
              <div className={styles.OrderContent} key={chef.id}>
                <img
                  src={Heart.src}
                  alt=""
                  className={styles.loveImg}
                  onClick={() => addToFavorites(chef)}
                />
                <Image
                  src={chef.image}
                  alt="Image"
                  width="100"
                  height="100"
                  objectFit="cover"
                  className={styles.OrderContentImage}
                />
                <p className={styles.sellersName}>{chef.name}</p>
                <p className={styles.TimeDelivered}>Average Delivery Time</p>
                <p className={styles.Delivery_timeFigure}>{chef.deliveryTime}</p>
                <button className={styles.OrderNowButton}>Place Order</button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
