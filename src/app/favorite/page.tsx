"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Love from '../images/ant-design_heart-filled.svg';
import { SideBar } from '../components/Sidebar';
import { TopBar } from '../components/Topbar';

interface Chef {
  id: number;
  name: string;
  deliveryTime: string;
  image: string;
  description: string;
}

const Favorite: React.FC = () => {
  const [favoriteChefs, setFavoriteChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteChefs');
    if (savedFavorites) {
      setFavoriteChefs(JSON.parse(savedFavorites) as Chef[]);
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
      <SideBar />
      <div className={styles.main_content}>
        <TopBar />
        <section className={styles.section_content}>
          <div className={styles.topic_options}>
            <p className={styles.profileDisplay}>Favorites</p>
            <div className={styles.profile_content}>
              <Link href="/">
              <div className={styles.profileOptions}>Home</div>
              </Link>
              <div className={styles.profileOptions}>Favorites</div>
            </div>
          </div>
          <div className={styles.placeOrder}>
            {favoriteChefs.map((chef) => (
              <div className={styles.orderContent} key={chef.id}>
                <img src={Love.src} alt="" className={styles.loveImg} />
                <Image
                  src={chef.image}
                  alt="Image"
                  width="243"
                  height="187"
                  // objectFit="cover"
                  className={styles.orderContentImage}
                />
                <p className={styles.sellersName}>{chef.name}</p>
                <p className={styles.timeDelivered}>Average Delivery Time</p>
                <p className={styles.deliveryTimeFigure}>{chef.deliveryTime}</p>
                <button className={styles.orderNowButton}>Place Order</button>
              </div>
            ))}
          </div>
        </section>
      </div>
      </div>
    </main>
  );
};



export default Favorite;
