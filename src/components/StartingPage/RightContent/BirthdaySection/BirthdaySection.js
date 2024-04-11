import { Link } from "react-router-dom";
import styles from "./BirthdaySection.module.scss";
import { DataContext } from "../../../AppData/AppData";
import { useContext } from "react";

import CelebrationIcon from "@mui/icons-material/Celebration";

export function BirthdaySection(props) {
  const { handleUser } = useContext(DataContext);

  function userClick() {
    handleUser(props.user);
  }

  return (
    <div className={styles.birthdaySectionContainer}>
      <h1>Birthday</h1>

      <div onClick={userClick}>
        <CelebrationIcon className={styles.birthdayIcon}></CelebrationIcon>

        <Link
          className={styles.birthdayName}
        >{`${props.user.name}`}</Link>
      </div>
    </div>
  );
}
