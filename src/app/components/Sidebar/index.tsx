"use client"

import React from "react";
import styles from "./sidebar.module.css";
import Menu from "../../images/DashboardColored.svg";
import Bid from "../../images/bid.svg";
import Profile from "../../images/Profile.svg";
import Settings from "../../images/setting.svg";
import Favorites from "../../images/heart.svg";
import Link from "next/link";
import Logo from "../../images/Logo.png";

export const SideBar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebar_Content}>
                <span className={styles.Logo}>
                    <div>
                        <img src={Logo.src} alt="Logo" />
                    </div>
                </span>
                <Link href="/">
                    <div>
                        <img src={Menu.src} alt="Logo" />
                    </div>
                </Link>
                <div>
                    <img src={Bid.src} alt="Logo" />
                </div>
                <Link href="/profile">
                    <div>
                        <img src={Profile.src} alt="Logo" />
                    </div>
                </Link>
                <Link href="/favorite">
                    <div>
                        <img src={Favorites.src} alt="Logo" />
                    </div>
                </Link>
                <Link href="/settings">
                    <div>
                        <img src={Settings.src} alt="Logo" />
                    </div>
                </Link>
            </div>
        </div>
    )
}