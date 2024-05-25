
import React from "react";
import styles from "./page.module.css";
import Logo from "../../public/Logo.png";
import Menu from "./components/DashBoard.svg";
import Bid from "./components/bid.svg";
import Profile from "./components/Profile.svg";
import Settings from "./components/setting.svg";
import Favorites from "./components/heart.svg";
import Moon from "./components/moon.svg";
import  Notification from "./components/bell.svg";
import Avatar from "../../public/avatar.png"
import OrderImage from "../../public/NFT.png";
import Link from "next/link";



const Home: React.FC = () => {
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
          <div className={styles.options}>
            <span className={styles.Explore}>
              <p className={styles.introText}>Discover, Explore or create sales or buyer account</p>
              <p className={styles.Preamble}>Digital Marketplace for food sellers and buyers</p>
              <div className={styles.ExplorButtons}>
                <button className={styles.ExploreButton1}>Explore</button>
                <Link href="/login">
                <button className={styles.ExploreButton2}>Join Us</button>
                </Link>

              </div>
            </span>

            <span className={styles.bids}>
              <div className={styles.bid_Image}></div>
              <div className={styles.bid_content}>
                <div className={styles.bid_postContent}><img src={ Avatar.src } alt="Image" /> <p className={styles.ProfileName}>John Abraham</p></div>
                <span className={styles.AllBids}>
                  <p className={styles.bidder_Name}>Brighten LQ</p>
                  <p className={styles.bidder_time}>Average delivery time</p>
                  <p className={styles.bidder_timeFigure}>3h 3m 43s</p>
                  </span>
                  <span><button className={styles.orderButton}>Patronize</button> <button className={styles.History}>History</button></span>
                  </div>
            </span>
          </div>

          <div className={styles.Topic_options}>
            <p className={styles.trendingNow}>Trending Now</p>
            <div className={styles.trending_Content}>
            <span className={styles.AllOptions}>All</span>
            <span className={styles.OtherOptions}>Food</span>
            <span className={styles.OtherOptions}>Drinks</span>
            </div>
          </div>

          <div className={styles.PlaceOrder}>
            <span className={styles.OrderContent}>
              <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
            <span className={styles.OrderContent}>
            <div className={styles.OrderContentImage}></div>
              <p className={styles.sellersName}>Chops' Merchant</p>
              <p className={styles.TimeDelivered}>Average Delivery Time</p>
                  <p className={styles.Delivery_timeFigure}>3h 3m 43s</p>
                  <button className={styles.OrderNowButton}>Place Order</button>
            </span>
          </div>


        </section>

      </div>
    </main>
  );
}


export default Home;