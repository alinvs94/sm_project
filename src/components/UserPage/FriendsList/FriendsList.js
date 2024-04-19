import { Link } from "react-router-dom";
import styles from "./FriendsList.module.scss";

import Tooltip from "@mui/material/Tooltip";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../AppData/AppData";

export function FriendsList({ friend }) {
   const { USERS } = useContext(DataContext);

   const friendData = USERS.find((user) => friend.email === user.email);

   return (
      <>
         <Tooltip title={friend.name} placement="top">
            <Link style={{ zIndex: "1" }}>
               <img
                  className={styles.friendPic}
                  alt="Friend Pic"
                  src={friendData && friendData.picture}
               ></img>
            </Link>
         </Tooltip>
      </>
   );
}
