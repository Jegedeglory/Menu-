import React from 'react';
import styles from './TrendingOptions.module.css';

export const TrendingOptions: React.FC = () => {
  return (
    <div className={styles.topic_options}>
      <p className={styles.trendingNow}>Trending Now</p>
      <div className={styles.trending_content}>
        <span className={styles.allOptions}>All</span>
        <span className={styles.otherOptions}>Food</span>
        <span className={styles.otherOptions}>Drinks</span>
      </div>
    </div>
  );
};
