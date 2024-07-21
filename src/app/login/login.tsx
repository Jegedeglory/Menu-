"use client"
import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./pages.module.css"
import AuthService from "./authservice";
import ToggleVisibility from "../components/toggleVisibilty";


interface LoginProps {
    onFormSwitch: (formName: string) => void;
}

export const Login: React.FC<LoginProps> = (props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null> (null);
    const router = useRouter();
    const passwordInputRef = useRef<HTMLInputElement>(null)
    
    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await AuthService.login(email, password);
            console.log("Logged in successfully:", userData);
            // Redirect to the home page after successful login
            router.push('/');
        } catch (error) {
            setError("Login failed. Please check your credentials and try again.");
        }
    };

    


    return (
        <div className={styles.auth_form_container}>
                        {error && <p style={{ color: "#111", backgroundColor: "#e7af4e", padding: "4px", borderRadius: "5px", marginBlock: "4px" }}>{error}</p>}
            <h2>Login</h2>
            <form className={styles.login_form} onSubmit={handleLogin}>
                <div className={styles.email}>Email</div>
                <input 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="youremail@gmail.com" 
                    id="email" 
                    className={styles.input}
                    name="email" 
                    autoComplete="off"
                    />
                <div className={styles.password}>Password</div>
                <div className={styles.passwordWrapper}>
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="*****" 
                    className={styles.input}
                    id="password" 
                    name="password" 
                    ref={passwordInputRef}
                />
                      <div className={styles.togglePass}>
                        <ToggleVisibility inputRef={passwordInputRef} />
                      </div>
                  </div>
                <button className={styles.button} type="submit">Login</button>
            </form>
            <button className={styles.link_btn} 
            onClick={() => props.onFormSwitch('register')}
                >
                Don't have an account? Register Here
            </button>

             {/* {
              users.map((user: any) => {
                return (
                  <div style={{
                    margin: "10px",
                    color: "blue"
                  }}>
                    <p>{user.password}</p>
                    <p>{user.email}</p>
                    <p>{user._id}</p>
                  </div>
                )
              })
            }  */}
        </div>
    );
};
