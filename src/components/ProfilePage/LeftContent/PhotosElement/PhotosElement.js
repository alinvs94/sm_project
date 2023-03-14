import styles from "./PhotosElement.module.scss";

export function PhotosElement(props) {
  return (
    <div className={styles.photosElement}>
      <img
        src={`${props.url}`}
        alt="User Pic"
        style={{ borderRadius: "4px" }}
      ></img>
    </div>
  );
}
