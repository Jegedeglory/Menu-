import React from 'react';
import styles from './TrendingOptions.module.css';

export const TrendingOptions: React.FC = () => {
  return (
    <div className={styles.topic_options}>
      <p className={styles.trendingNow}>Trending Now</p>
      <div className={styles.trending_content}>
        
        <button className={styles.allOptions}>All</button>
        <button className={styles.otherOptions}>Food</button>
        <button className={styles.otherOptions}>Drinks</button>
      </div>
    </div>
  );
};
