import { useContext, useEffect, useState } from "react";
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
   const { usersList, birthdayNumb, friendsList } = useContext(DataContext);
   const [chatUsers, setChatUsers] = useState();
   const [birthdayUser, setBirthdayUser] = useState();

   const loadChat = async () => {
      if (friendsList && friendsList.length > 0) {
         setBirthdayUser(friendsList[birthdayNumb]);
         const chatElement = await friendsList.map((user, index) => {
            return <ChatSection user={user} key={index}></ChatSection>;
         });
         setChatUsers(chatElement);
      } else {
         birthdayUser = { name: "No birthday today" };
         setChatUsers("You've got no friends :(");
      }
   };

   useEffect(() => {
      loadChat();
   }, [friendsList]);

   return (
      <div className={styles.rightContainer}>
         <AdsSection></AdsSection>
         <hr />
         {birthdayUser ? (
            <BirthdaySection
               user={birthdayUser}
               key={birthdayUser.id}
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

         <div>{chatUsers}</div>
      </div>
   );
}
