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
  const [filter, setFilter] = useState<string>("all" || "drinks" || "food");
  const chefs = [
    { id: 1, name: 'James Grey Winery', deliveryTime: '25 min', image: 'https://images.pexels.com/photos/33265/wine-bottle-wine-glasses-wine-ambience.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 1 description', productType: "drinks" },
    { id: 2, name: 'Fruit Juice Palace', deliveryTime: '35 min', image: 'https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg', description: 'Chef 2 description', productType: "drinks" },
    { id: 3, name: 'Belle full', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=600', description: 'Chef 3 description', productType: "food" },
    { id: 4, name: 'Sugar fams', deliveryTime: '45 min', image: 'https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 4 description', productType: "food" },
    { id: 5, name: 'The Mainz Cookies', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/4110541/pexels-photo-4110541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 5 description', productType: "food" },
    { id: 6, name: "Bob's Smoothie", deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/756773/pexels-photo-756773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 6 description', productType: "drinks" },
    { id: 7, name: 'Fruits Colslaw', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/709567/pexels-photo-709567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 7 description', productType: "food" },
    { id: 8, name: 'Milky Doughnuts', deliveryTime: '1hr 32min', image: 'https://images.pexels.com/photos/3338681/pexels-photo-3338681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'Chef 8 description', productType: "food" },
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
            <button className={`${filter === "all" ? styles.allOptions : styles.otherOptions} ${filter === "all" ? styles.active : ""}`} onClick={() => handleFilterChange("all")}>
                  All
                </button>
                <button className={`${filter === "food" ? styles.allOptions : styles.otherOptions} ${filter === "food" ? styles.active : ""}`} onClick={() => handleFilterChange("food")}>
                  Food
                </button>
                <button className={`${filter === "drinks" ? styles.allOptions : styles.otherOptions} ${filter === "drinks" ? styles.active : ""}`} onClick={() => handleFilterChange("drinks")}>
                  Drinks
                </button>
            </div>
          </div>

          <div className={styles.placeOrder}>
            {filteredChefs.map((chef) => (
              <div className={styles.orderContent} key={chef.id}>
                <img
                  src="./images/bytesizeHeart.svg"
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
