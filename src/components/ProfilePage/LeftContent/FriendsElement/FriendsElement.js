import { useContext } from "react";
import { DataContext } from "../../../AppData/AppData";
import styles from "./FriendsElement.module.scss";

export function FriendsElement({props, friend}) {
   const { handleUser } = useContext(DataContext);
   return (
      <div
         className={styles.friendsElement}
         onClick={(e) => {
            handleUser(friend);
         }}
      >
         <img src={friend.picture}></img>
         <p>{friend.name}</p>
      </div>
   );
}
