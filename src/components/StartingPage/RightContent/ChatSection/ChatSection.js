import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ChatSection.module.scss";
import { DataContext } from "../../../AppData/AppData";
import { useContext } from "react";

export function ChatSection(props) {
  const {handleUser} = useContext(DataContext);
  const user = props.user;

  const profilePic = user.picture.medium;

  function userClick() {
    handleUser(user);
  }

  let isOnline;
  let isOffline;

  if (user.userId < 7) {
    isOnline = "success";
    isOffline = false;
  } else {
    isOnline = "action";
    isOffline = true;
  }


  return (
    <div className={styles.chatSectionContainer} onClick={userClick} to='/user'>

      <Link
        className={`${styles.contactsContainer} ${
          isOffline ? styles.isOffline : 'null'
        }`}
      >
        <Badge
          color={isOnline}
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
            src={profilePic}
            alt="profPic"
          ></img>
        </Badge>
        <p className={styles.profileName}>{user.name.first}</p>
      </Link>
    </div>
  );
}
