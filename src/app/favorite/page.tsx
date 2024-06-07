"use client"
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../images/Logo.png';
import Menu from '../images/DashboardColored.svg';
import Bid from '../images/bid.svg';
import Profile from '../images/Profile.svg';
import Settings from '../images/setting.svg';
import Favorites from '../images/heart.svg';
import Moon from '../images/moon.svg';
import Notification from '../images/bell.svg';
import Avatar from '../images/avatar.png';
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
              <div className={styles.profileOptions}>Home</div>
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
                  width={100}
                  height={100}
                  objectFit="cover"
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

// const Sidebar: React.FC = () => (
//   <div className={styles.sidebar}>
//     <div className={styles.sidebarContent}>
//       <span className={styles.logo}>
//         <Link href="/">
//         <Image src={Logo} alt="Logo" />
//         </Link>
//       </span>
//       <Link href="/">
//         <div>
//           <Image src={Menu} alt="Menu" />
//         </div>
//       </Link>
//       <div>
//         <Image src={Bid} alt="Bid" />
//       </div>
//       <Link href="/profile">
//         <div>
//           <Image src={Profile} alt="Profile" />
//         </div>
//       </Link>
//       <Link href="/favorite">
//         <div>
//           <Image src={Favorites} alt="Favorites" />
//         </div>
//       </Link>
//       <Link href="/settings">
//         <div>
//           <Image src={Settings} alt="Settings" />
//         </div>
//       </Link>
//     </div>
//   </div>
// );



export default Favorite;
