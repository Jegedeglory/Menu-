
import React from "react";
import styles from "./page.module.css";
import Moon from "./images/moon.svg";
import Notification from "./images/bell.svg";
import Avatar from "./images/avatar.png";
import Image from "next/image";
import { Sidebar } from "./components/Sidebar";
import { TopCards } from "./components/Topcards";
import { TopBar } from "./components/Topbar";

// Bad Commenting inside your code,setup eslint and prettifier to fix this
// Always separate your code into different reusable components. Avoid making components looking too long
// stop importing from public
// research about naming conventions for CSS , react and JSX files and use consistent naming for each kind of file

const Home: React.FC = () => {

  const chefs = [
    {
      id: 1,
      name: "James Cook",
      deliveryTime: "25 min",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1",
      description: "Chef 1 description",
    },
    {
      id: 2,
      name: "John Doe",
      deliveryTime: "35 min",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1",
      description: "Chef 2 description",
    },
    {
      id: 3,
      name: "Jane Doe",
      deliveryTime: "45 min",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=2260&h=750&dpr=1",
      description: "Chef 3 description",
    }
  ];


  return (
    <main className={styles.main}>
      <Sidebar />
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
            {
              chefs.map((chef) => {
                return (
                  <div className={styles.OrderContent}>
                    <Image src={chef.image} alt="Image" width="100" height="100" className={styles.OrderContentImage} />
                    <p className={styles.sellersName}>{chef.name}</p>
                    <p className={styles.TimeDelivered}>Average Delivery Time</p>
                    <p className={styles.Delivery_timeFigure}>{chef.deliveryTime}</p>
                    <button className={styles.OrderNowButton}>Place Order</button>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    </main>
  );
}


export default Home;