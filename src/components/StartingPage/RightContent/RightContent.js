import { useEffect, useState, useContext } from "react";
import { useAxios } from "../../../hooks/useAxios";
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
  const { USERS } = useContext(DataContext);

  const users = useAxios("https://jsonplaceholder.typicode.com/users");

  let user;
  let chatUser;
  const randomNum = Math.floor(Math.random() * 10) + 1;

  if (users.length === 0) {
    user = { name: {first:  "No birthday today"} };
    chatUser = "You've got no friends :(";
  } else {
    user = USERS.find((element) => element.userId === randomNum);
    chatUser = USERS.map((user) => {
      if(user.userId <= 15) {
        return (
          <ChatSection name={`${user.name.first} ${user.name.last}`} id={user.userId} key={user.userId} image={user.picture.medium}></ChatSection>
        );
      }
    });
  }

  return (
    <div className={styles.rightContainer}>
      <AdsSection></AdsSection>
      <hr />
      {user ? <BirthdaySection name={`${user.name.first} ${user.name.last} `} key={user.userId}></BirthdaySection> : 'Still loading'}
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
