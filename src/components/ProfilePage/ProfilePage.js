import { Link } from "react-router-dom";
import styles from "./ProfilePage.module.scss";
import { FriendsList } from "./FriendsList/FriendsList";
import { ProfileNavBar } from "./ProfileNavBar/ProfileNavBar";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";
import { DataContext } from '../AppData/AppData';

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import CreateIcon from "@mui/icons-material/Create";
import { useState, useContext } from "react";
import { useFetch } from "../../hooks/useFetch";

export function ProfilePage() {

  const { USERS, friendsNum } = useContext(DataContext);

  let friend;

  if (USERS.length === 0) {
    friend = "You've got no friends";
  } else {
    friend =
    USERS.map((user) => {
        if (user.userId < 7) {
          return (
            <FriendsList
              key={user.userId}
              id={user.userId}
              name={user.name.first}
              src={user.picture.medium}
            ></FriendsList>
          );
        }
        return friend;
      });
  }


  return (
    <div className={styles.profilePageWrapper}>
      <div className={styles.profilePageContent}>
        <div className={styles.coverWrapper}>
          <img
            className={styles.coverPic}
            src={require('./assets/cover.jpg')}
            alt="Profile Cover"
          ></img>

          <Tooltip title="Click me" placement="top">
            <Link className={styles.coverIcon}>
              <PhotoCameraIcon></PhotoCameraIcon>
              <p>Change your cover</p>
            </Link>
          </Tooltip>
        </div>

        {/* Profile Header */}
        <div className={styles.profileHeader}>
          <div className={styles.leftHeader}>
            <img
              className={styles.profilePic}
              src={require("./assets/userProfile.jpg")}
              alt="Profile Pic"
            ></img>

            <div className={styles.profileInfo}>
              <div>
                <Tooltip title="Change Profile Photo" placement="bottom">
                  <Link className={styles.photoIcon}>
                    <PhotoCameraIcon></PhotoCameraIcon>
                  </Link>
                </Tooltip>
              </div>

              <h1>Alin Vasiliu</h1>

              <div className={styles.friendsCount}>
                {friendsNum} <h5>friends</h5>
              </div>

              <div className={styles.friendsList}>{friend}</div>
            </div>
          </div>

          <div className={styles.rightHeader}>
            <Button variant="contained" className={styles.rightHeaderButton}>
              <AddIcon></AddIcon>Add a story
            </Button>
            <Button variant="contained" className={styles.rightHeaderButton}>
              <CreateIcon></CreateIcon>Profile settings
            </Button>
          </div>
        </div>

        <hr />
        {/* NavBar */}

        <ProfileNavBar></ProfileNavBar>

        <div className={styles.profilePageContent}>
          <LeftContent
            className={styles.leftContent}
          ></LeftContent>

          <RightContent className={styles.rightContent}
          USERS={USERS}></RightContent>
        </div>
      </div>
    </div>
  );
}
