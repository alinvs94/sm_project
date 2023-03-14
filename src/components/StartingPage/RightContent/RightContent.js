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
  // const { USERS } = useContext(DataContext);

  const USERS = useAxios("https://jsonplaceholder.typicode.com/users");

  const [noUser, setNoUser] = useState(false);

  let user;
  let chatUser;
  const randomNum = Math.floor(Math.random() * 10) + 1;

  useEffect(() => {
    if (USERS.length === 0) {
      setNoUser(true);
    } else {
      setNoUser(false);
    }
  }, [USERS.length]);

  if (USERS.length === 0) {
    user = [{ name: {first:  "No birthday today"} }];
    chatUser = "You've got no friends :(";
  } else {
    user = USERS.filter((element) => element.id === randomNum);
    chatUser = USERS.map((user) => {
      return (
        <ChatSection name={`${user.name}`} id={user.id} key={user.id}></ChatSection>
      );
    });
  }



console.log(user[0].name)

  return (
    <div className={styles.rightContainer}>
      <AdsSection></AdsSection>
      <hr />
      <BirthdaySection name={`${user[0].name}`} key={user[0].userId}></BirthdaySection>
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

      <div className={noUser ? styles.noUser : 'null'}>{chatUser}</div>
    </div>
  );
}
