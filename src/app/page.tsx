"use client"

import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
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
  productType: string;
}
const Home: React.FC = () => {
  const [favorites, setFavorites] = useState<Chef[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const chefs = [
    { id: 1, name: 'James Grey', deliveryTime: '25 min', image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 1 description', productType: "drinks" },
    { id: 2, name: 'John Rene', deliveryTime: '35 min', image: 'https://images.pexels.com/photos/220413/pexels-photo-220413.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 2 description', productType: "food" },
    { id: 3, name: 'Monica Dias', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/220433/pexels-photo-220433.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 3 description', productType: "food" },
    { id: 4, name: 'Suarez Alberto', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/220493/pexels-photo-220493.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 3 description', productType: "drinks" },
    { id: 5, name: 'Chloe Mary', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220743/pexels-photo-220743.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description', productType: "drinks" },
    { id: 6, name: 'Clinton Bob', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220253/pexels-photo-220253.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description', productType: "drinks" },
    { id: 7, name: 'Steve McCarthy', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/245753/pexels-photo-245753.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description', productType: "drinks" },
    { id: 8, name: 'Amosun Nelson', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/220754/pexels-photo-220754.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1', description: 'Chef 5 description', productType: "food" },
  ];

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favoriteChefs') || "[]");
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteChefs', JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (chef: Chef ) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id === chef.id)) {
        return [...prevFavorites, chef];
      }
      return prevFavorites;
    });
  };


  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const filteredChefs = filter === "all" ? chefs : chefs.filter((chef) => chef.productType === filter);
  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
      <SideBar />
      <div className={styles.mainContent}>
        <TopBar /> 
        <section className={styles.sectionContent}>
          <TopCards />
          <div className={styles.topicOptions}>
            <p className={styles.trendingNow}>Trending Now</p>
            <div className={styles.trendingContent}>
            <button className={`${styles.allOptions} ${filter === "all" ? styles.active : ""}`} onClick={() => handleFilterChange("all")}>
                  All
                </button>
                <button className={`${styles.otherOptions} ${filter === "food" ? styles.active : ""}`} onClick={() => handleFilterChange("food")}>
                  Food
                </button>
                <button className={`${styles.otherOptions} ${filter === "drinks" ? styles.active : ""}`} onClick={() => handleFilterChange("drinks")}>
                  Drinks
                </button>
            </div>
          </div>

          <div className={styles.placeOrder}>
            {filteredChefs.map((chef) => (
              <div className={styles.orderContent} key={chef.id}>
                <img
                  src={Heart.src}
                  alt=""
                  className={styles.loveImg}
                  onClick={() => addToFavorites(chef)}
                />
                <Image
                  src={chef.image}
                  alt="Image"
                  width="243"
                  height="187"
                  // objectFit="cover"
                  className={styles.orderContentImage}
                />
                <p className={styles.sellersName}>{chef.name}</p>
                <p className={styles.TimeDelivered}>Average Delivery Time</p>
                <p className={styles.Delivery_timeFigure}>{chef.deliveryTime}</p>
                <button className={styles.OrderNowButton}>View details</button>
              </div>
            ))}
          </div>
        </section>
          </div>
      </div>
    </main>
  );
};

export default Home;
