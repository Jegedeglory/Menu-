import Link from "next/link";
import styles from "./topcards.module.css";
// import Avatar from "../../images/avatar.png";

export const TopCards = () => {
    return (
        <div className={styles.container}>
            <div className={styles.Explore}>
                <p className={styles.introText}>Discover, Explore or create sales or buyer account</p>
                <p className={styles.Preamble}>Digital Marketplace for food sellers and buyers</p>
                <div className={styles.ExplorButtons}>
                    <button className={styles.ExploreButton1}>Explore</button>
                    <Link href="/login">
                        <button className={styles.ExploreButton2}>Join Us</button>
                    </Link>
                </div>
            </div>
            <div className={styles.bids}>
                <div className={styles.bid_Image}></div>
                <div className={styles.bid_content}>
                    <div className={styles.bid_postContent}><img src="/images/avatar.png" alt="Image" /> <p className={styles.ProfileName}>John Abraham</p></div>
                    <div className={styles.AllBids}>
                        <p className={styles.bidder_Name}>Brighten LQ</p>
                        <p className={styles.bidder_time}>Average delivery time</p>
                        <p className={styles.bidder_timeFigure}>3h 3m 43s</p>
                    </div>
                    <div className={styles.orderContentButton}><button className={styles.orderButton}>Patronize</button> <button className={styles.History}>History</button></div>
                </div>
            </div>
        </div>
    )
}