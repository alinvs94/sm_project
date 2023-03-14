import { Link } from "react-router-dom";
import styles from "./CommentsSection.module.scss";

export function CommentsSection(props) {
  return (
    <>
      <div className={styles.comments}>
        <Link className={styles.userWrapper} to="/">
          
            <img
              src={require("../assets/profilePic.jpg")}
              alt="Profile Picture"
              className={styles.profilePictureImg}
            ></img>
            <div className={styles.userInfo}>
              <p>{props.commentData.username}</p>
              <p>{props.commentData.date}</p>
            </div>
        </Link>

        <div className={styles.commentInfo}>
          <p>{props.commentData.comment}</p>
        </div>
      </div>
    </>
  );
}
