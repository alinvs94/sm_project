import { Link } from "react-router-dom";
import styles from "./NewsFeed.module.scss";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import InfoTwoToneIcon from "@mui/icons-material/Info";
import ThumbUpIcon from "@mui/icons-material/ThumbUpAlt";
import ReplyIcon from "@mui/icons-material/Reply";
import CommentIcon from "@mui/icons-material/Comment";
import { useRef, useState } from "react";
import { CommentsSection } from "./Comments/CommentsSection";
import Tooltip from "@mui/material/Tooltip";

const COMMENTS = [
  // {
  //   username: "Alin",
  //   date: "15.02.2023",
  //   comment: "Primul comment",
  //   id: 0,
  // },
  // {
  //   username: "Alex",
  //   date: "15.02.2023",
  //   comment: "Al doilea comment",
  //   id: 1,
  // },
];

export function NewsFeed(props) {

  const [likes, setLikes] = useState(Math.floor(Math.random() * 100));
  const [shares, setShares] = useState(Math.floor(Math.random() * 100));

  const [isLiked, setIsLiked] = useState(false);

  const [isShared, setIsShared] = useState(false);

  const [comments, setComments] = useState(COMMENTS);

  const commentDescription = useRef();

  const handleLike = () => {
    setIsLiked((prevState) => {
      return !prevState;
    });

    if (isLiked) {
      setLikes((prevState) => {
        return (prevState -= 1);
      });
    } else {
      setLikes((prevState) => {
        return (prevState += 1);
      });
    }
  };

  const handleShare = () => {
    setIsShared((prevState) => {
      return !prevState;
    });

    if (isShared) {
      setShares((prevState) => {
        return (prevState -= 1);
      });
    } else {
      setShares((prevState) => {
        return (prevState += 1);
      });
    }
  };
let today= new Date()
  const addComment = (event) => {
    if (event.keyCode === 13) {
      const commentValue = commentDescription.current.value;
      setComments((prevState) => {
        const newComment = {
          id: prevState.length,
          username: 'Alin',
          date: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
          comment: commentValue,
        };

        return [newComment, ...prevState];
      });
      commentDescription.current.value = '';
    }
  };

  return (
    <>
      <div className={styles.mainPost}>
        <div className={styles.postHeader}>
          <Link className={styles.userInfo}>
            <img
              src={props.image}
              alt="ProfilePic"
              className={styles.profilePictureImg}
            ></img>
            <span className={styles.username}>{props.name}</span>
          </Link>
          <Tooltip title="Show more" placement="left">
            <div className={styles.contextMenu}>
              <MoreHorizIcon></MoreHorizIcon>
            </div>
          </Tooltip>
        </div>

        <div className={styles.content}>
          <p>{props.postData.title}</p>
          <div className={styles.imageWrapper}>
            <img
              src={`https://picsum.photos/1000/700?random=${props.id}`}
              className={styles.mainPostImg}
              alt="postImage"
            ></img>
            <Tooltip title="Info" placement="bottom">
              <div className={styles.infoIcon}>
                <InfoTwoToneIcon></InfoTwoToneIcon>
              </div>
            </Tooltip>
          </div>

          <p>{props.postData.body}</p>
        </div>

        <div className={styles.reacts}>
          <div className={styles.likesContainer}>
            <ThumbUpIcon></ThumbUpIcon>
            <span className={styles.likesNumber}>{likes} likes</span>
          </div>
          <div className={styles.sharesContainer}>
            <ReplyIcon></ReplyIcon>
            <span className={styles.reactsNumber}>
              <span id="sharesNumber">{shares}</span> shares
            </span>
          </div>
        </div>

        <hr></hr>

        <div className={styles.reactsActions}>
          <div
            className={`${styles.reaction} ${isLiked && styles.blue}`}
            onClick={handleLike}
          >
            <ThumbUpIcon
              className={`${styles.rotateIcon} ${
                isLiked && styles.rotatedLikeIcon
              }`}
            ></ThumbUpIcon>
            <span>Like</span>
          </div>
          <div className={styles.reaction}>
            <CommentIcon></CommentIcon>
            <span>Comment</span>
          </div>
          <div
            className={`${styles.reaction} ${isShared && styles.blue}`}
            onClick={handleShare}
          >
            <ReplyIcon
              className={`${styles.rotateIcon} ${
                isShared && styles.rotatedShareIcon
              }`}
            ></ReplyIcon>
            <span>Share</span>
          </div>
        </div>

        <div className={styles.commentContainer}>
          {comments &&
            comments.map((comment) => {
              return (
                <CommentsSection
                  key={comment.id}
                  commentData={comment}
                ></CommentsSection>
              );
            })}
          <hr/>
          <div className={styles.insertCommentField}>
            <input
              type="text"
              defaultValue={''}
              placeholder="Intorduceti comentariul aici"
              ref={commentDescription}
              onKeyUp={addComment}
            ></input>
          </div>
        </div>
      </div>
    </>
  );
}
