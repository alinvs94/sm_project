import { LeftContent } from "./LeftContent/LeftContent";
import { NewsFeed } from "./NewsFeed/NewsFeed";
import { RightContent } from "./RightContent/RightContent";
import styles from "./StartingPage.module.scss";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../AppData/AppData";

export function StartingPage() {
  const { USERS, posts, numbArray } = useContext(DataContext);

  return (
    <section className={styles.mainContainer}>
      <aside className={styles.leftContent}>
        <LeftContent></LeftContent>
      </aside>

      <div className={styles.newsFeed}>
        {posts.map((post) => {
          if (post.id < 31) {
            let postUser = USERS.find((user) => user.userId === numbArray[post.id]);
            if (postUser !== undefined) {

              return (
                <NewsFeed
                  postData={post}
                  key={post.id}
                  id={post.id}
                  user={postUser}
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
