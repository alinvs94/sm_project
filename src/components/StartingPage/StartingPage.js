import { LeftContent } from "./LeftContent/LeftContent";
import { NewsFeed } from "./NewsFeed/NewsFeed";
import { RightContent } from "./RightContent/RightContent";
import styles from "./StartingPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../AppData/AppData";

export function StartingPage() {
  const { USERS, posts, randomNumbArray } = useContext(DataContext);

  return (
    <section className={styles.mainContainer}>
      <aside className={styles.leftContent}>
        <LeftContent></LeftContent>
      </aside>

      <div className={styles.newsFeed}>
        {posts.map((post) => {
          if (post.id < 31) {
            let postUser = USERS.filter((user) => user.userId === randomNumbArray[post.id]);
            if (postUser[0] !== undefined) {
              return (
                <NewsFeed
                  postData={post}
                  key={post.id}
                  id={postUser[0].userId}
                  name={`${postUser[0].name.first} ${postUser[0].name.last}`}
                  image={postUser[0].picture.large}
                ></NewsFeed>
              );
            }
          }
        })}
        ;
      </div>

      <aside className={styles.rightContent}>
        <RightContent></RightContent>
      </aside>
    </section>
  );
}
