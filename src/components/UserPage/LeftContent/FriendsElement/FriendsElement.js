import { useContext } from "react";
import styles from "./FriendsElement.module.scss";
import { DataContext } from "../../../AppData/AppData";

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
