"use client"

import React, { useState } from 'react';
import styles from './pages.module.css';
import { Login } from "./login";
import { Register } from './register';

const LoginPage: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<string>('login');

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
  };

  return (
    <div className={styles.App}>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} /> 
      }
    </div>
  );
};

export default LoginPage;
