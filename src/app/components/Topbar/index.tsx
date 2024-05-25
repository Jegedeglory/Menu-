import styles from "./topbar.module.css";
import Moon from "../../images/Moon.svg";
import Notification from "../../images/bell.svg";
import Avatar from "../../images/avatar.png";

export const TopBar = () => {
    return (
        <div className={styles.topBar}><input type="text" placeholder="Search here" className={styles.search} />
            <div className={styles.AvatarMenu}>
                <img src={Moon.src} alt="toggle Theme" />
                <img src={Notification.src} alt="Notification" />
                <img src={Avatar.src} alt="Profile Image" />
            </div>
        </div>
    )
}