import styles from "./LinkList.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import EventAvailableOutlinedIcon from "@mui/icons-material/EventAvailableOutlined";
import FitnessCenterOutlinedIcon from "@mui/icons-material/FitnessCenterOutlined";
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import RestoreOutlinedIcon from '@mui/icons-material/RestoreOutlined';
import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function LinkList() {

  const [state, setState] = useState(true);

  const toggleList = () => {
    setState((prevState) => {
      return !prevState;
    })
  };

  let listIcon;
  let listText;

    if (state === false) {
      listIcon = <KeyboardArrowUpIcon></KeyboardArrowUpIcon>;
      listText = 'Less..';
    } else {
      listIcon = <KeyboardArrowDownIcon></KeyboardArrowDownIcon>;
      listText = 'More..'
    }



  return (
    <div className={styles.linkListContainer}>
      <ul className={styles.linkListElements}>
        <li className={styles.linkListElement}>
          <Link to="/user">
            <img src={require("./images/profile2.jpg")} alt='profileImg'></img>
            <span>My Profile</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-shop-window"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
            </svg>
            <span>Marketplace</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <Diversity3OutlinedIcon></Diversity3OutlinedIcon>
            <span>Groups</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <EventAvailableOutlinedIcon></EventAvailableOutlinedIcon>
            <span>Events</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <RestoreOutlinedIcon></RestoreOutlinedIcon>
            <span>Memories</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-star"
              viewBox="0 0 16 16"
            >
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
            </svg>
            <span>Favourites</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-messenger"
              viewBox="0 0 16 16"
            >
              <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z" />
            </svg>
            <span>Messenger</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <BookmarkBorderOutlinedIcon></BookmarkBorderOutlinedIcon>
            <span>Saved elements</span>
          </Link>
        </li>

        <li className={styles.linkListElement}>
          <Link>
            <SettingsOutlinedIcon></SettingsOutlinedIcon>
            <span>Settings</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement} ${state && styles.hidden}`}>
          <Link>
            <FitnessCenterOutlinedIcon></FitnessCenterOutlinedIcon>
            <span>Health</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement} ${state && styles.hidden}`}>
          <Link>
            <MovieOutlinedIcon></MovieOutlinedIcon>
            <span>Videos</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement} ${state && styles.hidden}`}>
          <Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-tv"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z" />
            </svg>
            <span>Watch</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement} ${state && styles.hidden}`}>
          <Link>
            <SmartToyOutlinedIcon></SmartToyOutlinedIcon>
            <span>Games</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement} ${state && styles.hidden}`}>
          <Link>
            <BarChartOutlinedIcon></BarChartOutlinedIcon>
            <span>Insertions</span>
          </Link>
        </li>

        <li className={`${styles.linkListElement}`} onClick={toggleList}>
          <Link>
            {listIcon}
            <span>{listText}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
