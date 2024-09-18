import React from 'react';
import styles from './ChefList.module.css';
import Image from 'next/image';
// import Heart from '../images/bytesizeHeart.svg';

export const ChefList: React.FC<{ chefs: any[], addToFavorites: (chef: any) => void }> = ({ chefs, addToFavorites }) => {
  return (
    <div className={styles.placeOrder}>
      {chefs.map((chef) => (
        <div className={styles.orderContent} key={chef.id}>
          <img
            src="/images/bytesizeHeart.svg"
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
            className={styles.orderContentImage}
          />
          <p className={styles.sellersName}>{chef.name}</p>
          <p className={styles.timeDelivered}>Average Delivery Time</p>
          <p className={styles.deliveryTimeFigure}>{chef.deliveryTime}</p>
          <button className={styles.orderNowButton}>Place Order</button>
        </div>
      ))}
    </div>
  );
};
