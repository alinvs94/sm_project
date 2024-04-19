import { Link } from "react-router-dom";
import styles from "./UserPage.module.scss";
import { FriendsList } from "./FriendsList/FriendsList";
import { ProfileNavBar } from "./ProfileNavBar/ProfileNavBar";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";
import { DataContext } from "../AppData/AppData";

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

export function UserPage() {
   const { USERS, FRIENDS, clickedUser, handleUser } = useContext(DataContext);
   const [friendsList, setFriendsList] = useState([]);
   const [isFriend, setIsFriend] = useState(false);

   let friend;

   const getFriends = async () => {
      try {
         const r = await axios.get(`/friends/list/${clickedUser.id}`);
         setFriendsList(r.data);
      } catch (error) {
         console.log(error.response.data);
      }
   };
   useEffect(() => {
      
      getFriends();
   }, [handleUser]);   

   if (friendsList.length === 0) {
      friend = "";
   } else {
      friend = friendsList.map((friend, index) => {
         if (index < 7) {
            return (
               <FriendsList
                  key={index}
                  friend={friend}
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
                  src={`https://picsum.photos/seed/${clickedUser.id}/1100/350`}
                  alt="Profile Cover"
               ></img>
            </div>

            {/* Profile Header */}
            <div className={styles.profileHeader}>
               <div className={styles.leftHeader}>
                  <img
                     className={styles.profilePic}
                     src={clickedUser ? clickedUser.picture : "Loading"}
                     alt="Profile Pic"
                  ></img>

                  <div className={styles.profileInfo}>
                     <span className="text-4xl font-extrabold">
                        {clickedUser ? `${clickedUser.name}` : "Loading"}
                     </span>

                     <div className={styles.friendsCount}>
                        {friendsList.length === 0 ? <span className="text-lg mt-3">No Friends</span> :  <span className="flex gap-1">{friendsList.length} <h5>{friendsList.length > 1 ? "friends" : "friend"}</h5></span>}
                     </div>

                     <div className={styles.friendsList}>{friend}</div>
                  </div>
               </div>

               <div className={styles.rightHeader}>
                  <Button
                     variant="contained"
                     className={styles.rightHeaderButton}
                  >
                     <AddIcon></AddIcon>Add Friend
                  </Button>
                  <Button
                     variant="contained"
                     className={styles.rightHeaderButton}
                  >
                     <WhatsAppIcon></WhatsAppIcon>Message
                  </Button>
               </div>
            </div>

            <hr />
            {/* NavBar */}

            <ProfileNavBar></ProfileNavBar>

            <div className={styles.profilePageContent}>
               <LeftContent className={styles.leftContent}></LeftContent>

               <RightContent
                  className={styles.rightContent}
                  USERS={USERS}
               ></RightContent>
            </div>
         </div>
      </div>
   );
}
