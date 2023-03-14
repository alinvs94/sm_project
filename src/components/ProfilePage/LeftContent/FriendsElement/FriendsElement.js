import styles from './FriendsElement.module.scss'

export function FriendsElement(props) {
   return <div className={styles.friendsElement}>
      <img src={props.picture}></img>
      <p>{props.name}</p>
   </div>
};