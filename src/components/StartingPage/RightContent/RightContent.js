import { useContext } from "react";
import { AdsSection } from "./AdsSection/AdsSection";
import { BirthdaySection } from "./BirthdaySection/BirthdaySection";
import { ChatSection } from "./ChatSection/ChatSection";
import { Link } from "react-router-dom";
import { DataContext } from "../../AppData/AppData";
import styles from "./RightContent.module.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import Tooltip from "@mui/material/Tooltip";

import React from "react";

export function RightContent() {
  const { USERS, birthdayNumb } = useContext(DataContext);

  let birthdayUser;
  let chatUser;

  if (USERS.length === 0) {
    birthdayUser = { name: { first: "No birthday today" } };
    chatUser = "You've got no friends :(";
  } else {
    birthdayUser = USERS.find((element) => element.userId === birthdayNumb);
    chatUser = USERS.map((user) => {
      if (user.userId > 1 && user.userId <= 15) {
        return (
          <ChatSection
            user={user}
            key={user.userId}
          ></ChatSection>
        );
      }
    });
  }

  return (
    <div className={styles.rightContainer}>
      <AdsSection></AdsSection>
      <hr />
      {birthdayUser ? (
        <BirthdaySection
          user={birthdayUser}
          key={birthdayUser.userId}
        ></BirthdaySection>
      ) : (
        "Still loading"
      )}
      <hr />
      <h1 className={styles.chatTitle}>Contacts</h1>

      <div className={styles.chatMenu}>
        <Link className={styles.chatMenuIcon}>
          <Tooltip
            placement="top"
            disableFocusListener
            disableTouchListener
            title="Search"
          >
            <SearchIcon className={styles.searchIcon}></SearchIcon>
          </Tooltip>
        </Link>

        <Tooltip placement="top" title="Menu">
          <MoreHorizIcon className={styles.chatMenuIcon} />
        </Tooltip>
      </div>

      <div>{chatUser}</div>
    </div>
  );
}
