'use client';

import React, { useState } from 'react';
import styles from './pages.module.css';
import AuthService from './authservice';
import { useRouter } from 'next/navigation';

interface RegisterProps {
  onFormSwitch: (formName: string) => void;
}

export const Register: React.FC<RegisterProps> = (props) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Use the useRouter hook for redirection

  const addUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const data = await AuthService.register(name, email, password);

      if (data) {
          router.push('/login');
        alert('Registration successful');
      } else {
        throw new Error('Registration failed. No access token received.');
      }
    } catch (error: any) {
      console.error('Registration failed:', error);
      setError(error.message || 'Registration failed. Please try again.');
    }
  };

  return (
    <div className={styles.auth_form_container}>
      {error && (
        <p
          style={{
            color: '#111',
            backgroundColor: '#e7af4e',
            padding: '4px',
            borderRadius: '5px',
            marginBlock: '4px',
          }}
        >
          {error}
        </p>
      )}

      <h2>Register</h2>
      <form className={styles.register_form} onSubmit={addUser}>
        <div className={styles.name}>Full name</div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          className={styles.input}
          placeholder="Full Name"
          autoComplete="off"
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
          autoComplete="off"
        />
        <div className={styles.password}>Password</div>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          className={styles.input}
          name="password"
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
      <button
        className={styles.link_btn}
        onClick={() => props.onFormSwitch('login')}
      >
        Already have an account? Login Here
      </button>
    </div>
  );
};
