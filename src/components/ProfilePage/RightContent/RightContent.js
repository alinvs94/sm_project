import styles from "./RightContent.module.scss";
import { Link } from "react-router-dom";
import { NewsFeed } from "../../StartingPage/NewsFeed/NewsFeed";
import { useFetch } from "../../../hooks/useFetch";
import { useRef, useState } from "react";

import ShareIcon from "@mui/icons-material/Share";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import FlagIcon from "@mui/icons-material/Flag";
import { CommentsSection } from "../../StartingPage/NewsFeed/Comments/CommentsSection";

const myAccount = {
  firstName: "Alin",
  lastName: "Vasiliu",
  image: require('../assets/userProfile.jpg'),
};

const STATS = [];

export function RightContent(props) {
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");

  const [stats, setStats] = useState(STATS);

  const stat = useRef();

  let today = new Date();
  const addStats = (event) => {
    if (event.keyCode === 13) {
      const statValue = stat.current.value;
      setStats((prevState) => {
        const newStat = {
          id: prevState.length,
          username: "Alin",
          date:
            today.getFullYear() +
            "-" +
            (today.getMonth() + 1) +
            "-" +
            today.getDate(),
          comment: statValue,
        };

        return [newStat, ...prevState];
      });
      stat.current.value = "";
    }
  };

  return (
    <div className={styles.rightWrapper}>
      <div className={styles.topRight}>
        <div className={styles.inputContainer}>
          <img src={require("../assets/userProfile.jpg")} alt="userPic"></img>
          <input
            type="text"
            placeholder="  What's UP?"
            ref={stat}
            onKeyUp={addStats}
          ></input>
        </div>
        <hr />
        <div className={styles.iconsContainer}>
          <Link className={styles.iconElement}>
            <ShareIcon className={styles.icon}></ShareIcon>{" "}
            <p>Share a link</p>
          </Link>
          <Link className={styles.iconElement}>
            <AddToPhotosIcon className={styles.icon}></AddToPhotosIcon>{" "}
            <p>Photo/Video</p>
          </Link>
          <Link className={styles.iconElement}>
            <FlagIcon className={styles.icon}></FlagIcon>{" "}
            <p>Something important!</p>
          </Link>
        </div>
      </div>
      <div className={styles.statsContainer}>
        {stats &&
          stats.map((stat) => {
            return (
              <CommentsSection
                key={stat.id}
                commentData={stat}
              ></CommentsSection>
            );
          })}
      </div>

      <div className={styles.postsFeed}>
        {posts &&
          posts.map((post) => {
            if (post.id < 5) {
              return (
                <NewsFeed
                  style={{ width: "100%" }}
                  number={Math.floor(Math.random() * 1000)}
                  postData={post}
                  id={post.id}
                  key={post.id}
                  name={`${myAccount.firstName} ${myAccount.lastName}`}
                  image={myAccount.image}
                ></NewsFeed>
              );
            }
          })}
        ;
      </div>
    </div>
  );
}
