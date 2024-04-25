import { Link, useParams } from "react-router-dom";
import styles from "./UserPage.module.scss";
import { FriendsList } from "./FriendsList/FriendsList";
import { ProfileNavBar } from "./ProfileNavBar/ProfileNavBar";
import { LeftContent } from "./LeftContent/LeftContent";
import { RightContent } from "./RightContent/RightContent";
import { DataContext } from "../AppData/AppData";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import VerifiedIcon from '@mui/icons-material/Verified';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { click } from "@testing-library/user-event/dist/click";

export function UserPage() {
   const { friendsList, clickedUser, handleUser, setClickedUser } =
      useContext(DataContext);
   const [isFriend, setIsFriend] = useState(false);
   const { userName, userId } = useParams();

   let friend;
   const userFriendsList = clickedUser.friends_list;

   useEffect(() => {
      const getUser = async () => {
         try {
            const res = await axios.get("/user/getUser", {
               params: {
                  name: userName,
                  id: userId,
               },
            });
            setClickedUser(res.data);
         } catch (error) {
            console.log(error.response.data.message);
         }
      };
      getUser();
   }, []);

   useEffect(() => {
      const checkFriend = friendsList.find((friend) => {
         return (friend.id === clickedUser.id);
      });
      console.log(checkFriend);
      if(checkFriend) {
         setIsFriend(true);
      }
   }, [friendsList]);

   if (userFriendsList && userFriendsList.length > 0) {
      friend = userFriendsList.map((friend, index) => {
         if (index < 7) {
            return <FriendsList key={index} friend={friend}></FriendsList>;
         }
         return friend;
      });
   } else {
      friend = "";
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
                        {userFriendsList && userFriendsList.length === 0 ? (
                           <span className="text-lg mt-3">No Friends</span>
                        ) : (
                           <span className="flex gap-1">
                              {userFriendsList && userFriendsList.length}
                              <h5>
                                 {userFriendsList && userFriendsList.length > 1
                                    ? "friends"
                                    : "friend"}
                              </h5>
                           </span>
                        )}
                     </div>

                     <div className={styles.friendsList}>{friend}</div>
                  </div>
               </div>

               <div className={styles.rightHeader}>
               {isFriend ? <Button
                     variant="contained"
                     className={styles.rightHeaderButton}
                  >
                     <VerifiedIcon></VerifiedIcon>Already Friends
                  </Button>: <Button
                     variant="contained"
                     className={styles.rightHeaderButton}
                  >
                     <AddIcon></AddIcon>Add Friend
                  </Button>}
                  
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

               <RightContent className={styles.rightContent}></RightContent>
            </div>
         </div>
      </div>
   );
}
