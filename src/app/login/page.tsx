"use client"
import React, { useState, useEffect } from 'react';
import styles from './pages.module.css';
import { Login } from "./login";
import { Register } from './register';

const LoginPage: React.FC = () => {
  const [currentForm, setCurrentForm] = useState<string>(() => {
    // Set initial state based on localStorage value
    const savedForm = localStorage.getItem('currentForm');
    return savedForm ? savedForm : 'login';
  });

  useEffect(() => {
    const savedForm = localStorage.getItem('currentForm');
    if (savedForm) {
      setCurrentForm(savedForm);
    }
  }, []);

  const toggleForm = (formName: string) => {
    setCurrentForm(formName);
    localStorage.setItem('currentForm', formName);
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
