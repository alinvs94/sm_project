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

export function LeftContent(props) {
  const { USERS, userPicArray } = useContext(DataContext);

  // const randomUsers = getUsers(9);
 
  let photo;

  if (userPicArray.length === 0) {
    photo = "No pictures yet";
  } else {
    photo = userPicArray.map((element, index) => {
      return (
        <Grid key={index}>
          <PhotosElement key={index} url={element}></PhotosElement>
        </Grid>
      );
    })
  }

  return (
    <div className={styles.leftWrapper}>
      <div className={styles.biography}>
        <h1> In short</h1>
        <p>
          <SchoolIcon></SchoolIcon> Studied at{" "}
          <Link className={styles.infoLink}>My School</Link>
        </p>
        <p>
          <LocationCityIcon></LocationCityIcon> Living in{" "}
          <Link className={styles.infoLink}>My City</Link>
        </p>
        <p>
          <PlaceIcon></PlaceIcon> From{" "}
          <Link className={styles.infoLink}>My Country</Link>
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
                    name={`${user.name.first} ${user.name.last}`}
                    picture={user.picture.large}
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