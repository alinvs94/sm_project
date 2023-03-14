import { Link } from "react-router-dom";
import styles from "./BirthdaySection.module.scss";

import CelebrationIcon from '@mui/icons-material/Celebration';

export function BirthdaySection(props) {

  return (
    <div className={styles.birthdaySectionContainer}>
    
      <h1>Birthday</h1>
      
      <div>
      <CelebrationIcon className={styles.birthdayIcon}></CelebrationIcon>

      <Link className={styles.birthdayName}>{props.name}</Link>
      </div>

    </div>
  );
}
