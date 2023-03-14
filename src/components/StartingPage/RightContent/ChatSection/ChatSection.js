import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./ChatSection.module.scss";

export function ChatSection(props) {
  const profilePic = require(`./assets/profile${props.id}.jpg`);

  let isOnline;
  let isOffline;

  if (props.id < 5) {
    isOnline = "success";
    isOffline = false;
  } else {
    isOnline = "action";
    isOffline = true;
  }

  return (
    <div className={styles.chatSectionContainer}>

      <Link
        className={`${styles.contactsContainer} ${
          isOffline ? styles.isOffline : null
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
        <p className={styles.profileName}>{props.name}</p>
      </Link>
    </div>
  );
}
