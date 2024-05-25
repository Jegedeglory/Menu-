"use client"

import React, { useState } from "react";
import styles from "./pages.module.css"

interface LoginProps {
    onFormSwitch: (formName: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className={styles.login_form} onSubmit={handleSubmit}>
                <div className={styles.email}>Email</div>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    className={styles.input}
                    name="email" 
                    />
                <div className={styles.password}>Password</div>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="*****" 
                    className={styles.input}
                    id="password" 
                    name="password" 
                />
                <button className={styles.button} type="submit">Login</button>
            </form>
            <button className={styles.link_btn} onClick={() => props.onFormSwitch('register')}>
                Don't have an account? Register Here
            </button>
        </div>
    );
};
