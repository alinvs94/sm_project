import styles from "./LeftContent.module.scss";
import { Link } from "react-router-dom";
import { PhotosElement } from "./PhotosElement/PhotosElement";
import { FriendsElement } from "./FriendsElement/FriendsElement";
import { useContext } from "react";
import { DataContext } from "../../AppData/AppData";

import Button from "@mui/material/Button";
import CreateIcon from "@mui/icons-material/Create";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PlaceIcon from "@mui/icons-material/Place";
import Grid from "@mui/material/Grid";

export function LeftContent() {
   const { USERS, userPicArray, clickedUser } = useContext(DataContext);
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
            <h1> In short</h1>
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

            <Button variant="contained" className={styles.addInfoButton}>
               <CreateIcon></CreateIcon>Add some information
            </Button>
         </div>

         <div className={styles.photoWrapper}>
            <h1>Photo</h1>
            <Grid
               container
               className={styles.gridContainer}
               style={{ gap: "3px 6px" }}
            >
               {photo}
            </Grid>
         </div>

         <div className={styles.friendsWrapper}>
            <h1>Friends</h1>
            <Grid
               container
               className={styles.gridContainer}
               style={{ gap: "3px 6px" }}
            >
               {USERS.map((user) => {
                  if (user.userId < 10) {
                     return (
                        <Grid key={user.userId}>
                           <FriendsElement
                              key={user.userId}
                              name={`${user.name}`}
                              picture={user ? user.picture : ""}
                           ></FriendsElement>
                        </Grid>
                     );
                  }
               })}
            </Grid>
         </div>
      </div>
   );
}
