"use client"

import React, { useState } from "react";
import styles from "./pages.module.css"
interface RegisterProps {
    onFormSwitch: (formName: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [name, setName] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <div className={styles.auth_form_container}>
            <h2>Register</h2>
            <form className={styles.register_form} onSubmit={handleSubmit}>
                <div className={styles.name}>Full name</div>
                <input 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    name="name" 
                    id="name" 
                    className={styles.input}
                    placeholder="Full Name" 
                />
                <div className={styles.email}>Email</div>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    className={styles.input}
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    name="email" 
                />
                <div className={styles.password}>Password</div>
                <input 
                    value={pass} 
                    onChange={(e) => setPass(e.target.value)} 
                    type="password" 
                    placeholder="******" 
                    id="password" 
                    className={styles.input}
                    name="password" 
                />
                    
                <button className={styles.button} type="submit">Register</button>
            </form>
            <button className={styles.link_btn} onClick={() => props.onFormSwitch('login')}>
                Already have an account? Login Here
            </button>
        </div>
    );
};
