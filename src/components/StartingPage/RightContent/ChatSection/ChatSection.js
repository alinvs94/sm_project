import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ChatSection.module.scss";
import { DataContext } from "../../../AppData/AppData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export function ChatSection(props) {
   const { handleUser } = useContext(DataContext);
   const user = props.user;

   function userClick() {
      handleUser(user);
   }

   return (
      <div className={styles.chatSectionContainer} onClick={userClick}>
         <Link className={`${styles.contactsContainer}`}>
            <Badge
               badgeContent=" "
               overlap="circular"
               variant="dot"
               anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
               }}
               className={styles.pictureBadge}
            >
               <img
            className={styles.profilePicture}
            srcSet={`${user.picture}`}
            alt="profPic"
          ></img>
            </Badge>
            <p className={styles.profileName}>{user.name}</p>
         </Link>
      </div>
   );
}
