"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import PfP from "../images/pfp.svg.png";
import { SideBar } from "../components/Sidebar";
import { TopBar } from "../components/Topbar";
import ToggleVisibility from "../components/toggleVisibilty"; 

type Option = "EditProfile" | "Notification" | "Security" | "Help" | null;

const SettingsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const option = searchParams.get("option");

  const [activeOption, setActiveOption] = useState<Option>(() => {
    const savedOption = localStorage.getItem('activeOption');
    return savedOption ? savedOption as Option : 'EditProfile';
  });

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profilePic, setProfilePic] = useState<string>(() => {
    return localStorage.getItem("profilePic") || PfP.src;
  });

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    password: ""
  };

  const handleCancel = () => {
    setFirstName(initialFormState.firstName);
    setLastName(initialFormState.lastName);
    setEmail(initialFormState.email);
    setBio(initialFormState.bio);
    setPassword(initialFormState.password);
  };

  const handleSave = () => {
    // Save the form inputs - this could involve making an API call to update the user profile
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('lastName', lastName);
    localStorage.setItem('bio', bio);
    console.log({
      firstName,
      lastName,
      email,
      bio,
      password,
      profilePic
    });

  };

  useEffect(() => {
    if (option) {
      setActiveOption(option as Option);
    }
  }, [option]);

  useEffect(() => {
    localStorage.setItem('activeOption', activeOption || '');
  }, [activeOption]);

  useEffect(() => {
    localStorage.setItem("profilePic", profilePic);
  }, [profilePic]);

  const handleOptionClick = (option: Option) => {
    setActiveOption(option);
  };

  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setProfilePic(result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.topbarMainContent}>
        <SideBar />
        <div className={styles.mainContent}>
          <TopBar />
          <section className={styles.sectionContent}>
            <div className={styles.topicOptions}>
              <p className={styles.profileDisplay}>Settings</p>
              <div className={styles.profileContent}>
                <Link href="/">
                  <div className={styles.profileOptions}>Home</div>
                </Link>
                <span className={styles.profileOptions}>Setting</span>
              </div>
            </div>
            <div className={styles.settingsOptions}>
              <p
                className={`${styles.editProfileText} ${activeOption === "EditProfile" ? styles.active : ""}`}
                onClick={() => handleOptionClick("EditProfile")}
              >
                Edit Profile
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption === "Notification" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Notification")}
              >
                Notification
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption === "Security" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Security")}
              >
                Security
              </p>
              <p
                className={`${styles.editProfileText} ${activeOption === "Help" ? styles.active : ""}`}
                onClick={() => handleOptionClick("Help")}
              >
                Help
              </p>
            </div>
            {activeOption === "EditProfile" && (
              <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.editProfile}>
                  <div className={styles.editProfileNames}>
                    <div className={styles.editProfileInputArea}>
                      <p>First Name</p>
                      <input type="text" placeholder="First Name" className={styles.editProfileInput} value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className={styles.editProfileInputArea}>
                      <p>Last Name</p>
                      <input type="text" placeholder="Last Name" className={styles.editProfileInput} value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                  </div>
                  <div className={styles.editProfileInputArea}>
                    <p>Email</p>
                    <input type="email" placeholder="you@email.com" className={styles.editProfileInput} value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className={styles.editProfileInputArea}>
                    <p>Bio</p>
                    <input type="text" placeholder="Interesting stuffs about you" className={styles.editProfileInput} value={bio} onChange={(e) => setBio(e.target.value)}/>
                  </div>
                  <div className={styles.editProfileInputArea}>
                    <p>Password</p>
                    <div className={styles.passwordWrapper}>
                      <input type="password" placeholder="******" className={styles.editProfileInput} ref={passwordInputRef} value={password} onChange={(e) => setPassword(e.target.value)}/>
                      <div className={styles.togglePass}>
                        <ToggleVisibility inputRef={passwordInputRef} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.saveChangesButton}>
                    <button className={styles.cancelChanges} type="button" onClick={handleCancel}>Cancel</button>
                    <button className={styles.save} type="button" onClick={handleSave}>Save</button>
                  </div>
                </div>
              </form>
            )}
            {activeOption === "Notification" && (
              <div className={`${styles.editProfile} ${styles.checkInput}`}>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>Delivery completed</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>New Order</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>Delivery completed</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>Delivery completed</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>Delivery completed </p>

                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.checkboxInput}>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.slider}></span>
                  </label>
                  <label className={styles.switch}>
                    <input type="checkbox" />
                    <span className={styles.sliderRound}></span>
                  </label>
                  <div className={styles.checkboxArea}>
                    <p className={styles.notificationBlockWord}>Delivery completed</p>
                    <p>Alert me when my delivery is complete</p>
                  </div>
                </div>
                <div className={styles.saveChangesButton}>
                  <button className={styles.cancelChanges}>Cancel</button>
                  <button className={styles.save}>Save</button>
                </div>
              </div>
            )}
            {activeOption === "Security" && (
              <div className={styles.securitySection}>
                <div className={styles.pfpSection}>
                  <div className={styles.changePfp} onClick={() => fileInputRef.current?.click()}>
                    <div className={styles.imageContainer}>
                      <img src={profilePic} alt="Pfp" className={styles.PfP} />
                      {/* <div className={styles.EditImageBox}></div> */}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleProfilePicChange}
                    />
                  </div>
                </div>
                <div className={styles.editDetails}>
                  <div className={styles.editSecurityDetails}>
                    <p>Sign-in Email</p> 
                    <p>Jegsboy007@gmail.com</p>
                  </div>
                  <div className={styles.editSecurityDetails}>
                    <p>Password</p> 
                    <p className={styles.changePassword}>Change Password</p>
                  </div>
                  <div className={styles.editSecurityDetails}>
                    <p>2-factor authentication</p>
                    <div>
                      <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.slider}></span>
                      </label>
                      <label className={styles.switch}>
                        <input type="checkbox" />
                        <span className={styles.sliderRound}></span>
                      </label>
                    </div>
                  </div>
                  <div className={styles.editSecurityDetails}>
                    <p>Phone Number</p> 
                    <p>+2348053436707</p>
                  </div>
                </div>
              </div>
            )}
            {activeOption === "Help" && (
              <div className={styles.helpSection}>
                <h2>Help Section</h2>
                <p>If you need any assistance, please reach out to our support team.</p>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default SettingsPage;
