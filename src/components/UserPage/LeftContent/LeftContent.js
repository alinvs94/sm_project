import styles from "./LeftContent.module.scss";
import { Link } from "react-router-dom";
import { PhotosElement } from "./PhotosElement/PhotosElement";
import { FriendsElement } from "./FriendsElement/FriendsElement";
import { useContext } from "react";
import { DataContext } from "../../AppData/AppData";

import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PlaceIcon from "@mui/icons-material/Place";
import Grid from "@mui/material/Grid";

export function LeftContent() {
   const { userPicArray, clickedUser } = useContext(DataContext);
   const userFriendsList = clickedUser.friends_list;

   let photo;

   if (userPicArray) {
      if (userPicArray.length === 0) {
         photo = "No pictures yet";
      } else {
         photo = userPicArray.map((element, index) => {
            return (
               <Grid key={index}>
                  <PhotosElement key={index} url={element}></PhotosElement>
               </Grid>
            );
         });
      }
   }

   return (
      <div className={styles.leftWrapper}>
         <div className={styles.biography}>
            <span className="flex font-bold ml-3 mt-2">In Short</span>
            <p>
               <SchoolIcon></SchoolIcon> Studied at
               <Link
                  className={styles.infoLink}
               >{`${clickedUser.school_city}`}</Link>
            </p>
            <p>
               <LocationCityIcon></LocationCityIcon> Living in
               <Link className={styles.infoLink}>{`${clickedUser.city}`}</Link>
            </p>
            <p>
               <PlaceIcon></PlaceIcon> From
               <Link
                  className={styles.infoLink}
               >{`${clickedUser.country}`}</Link>
            </p>
         </div>

         <div className={styles.photoWrapper}>
            <span className="flex font-bold ml-3 mt-2">Photo</span>
            <Grid
               container
               className={styles.gridContainer}
               style={{ gap: "3px 6px" }}
            >
               {photo}
            </Grid>
         </div>

         <div className={styles.friendsWrapper}>
            <span className="flex font-bold ml-3 mt-2">Friends</span>

            {userFriendsList && userFriendsList.length > 0 ? (
               <Grid
                  container
                  className={styles.gridContainer}
                  style={{ gap: "3px 6px" }}
               >
                  {userFriendsList &&
                     userFriendsList.map((friend, index) => {
                        if (index < 9) {
                           return (
                              <Grid key={index}>
                                 <FriendsElement
                                    key={index}
                                    friend={friend}
                                 ></FriendsElement>
                              </Grid>
                           );
                        }
                     })}
               </Grid>
            ) : (
               <div className="flex font-bold w-full text-xl justify-center mb-3">
                  <span>Lonely person</span>
               </div>
            )}
         </div>
      </div>
   );
}
