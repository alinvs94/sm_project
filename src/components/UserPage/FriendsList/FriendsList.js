import { Link } from "react-router-dom";
import styles from "./FriendsList.module.scss";

import Tooltip from '@mui/material/Tooltip';


export function FriendsList(props) {
  return (
    <>
      <Tooltip title={props.name} placement="top">
        <Link style={{ zIndex: "1" }}>
          <img
            className={styles.friendPic}
            alt="Friend Pic"
            src={props.src}
          ></img>
        </Link>
      </Tooltip>
    </>
  );
}
