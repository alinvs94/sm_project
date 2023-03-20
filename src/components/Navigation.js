import { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { DataContext } from "./AppData/AppData";

import DiamondIcon from '@mui/icons-material/Diamond';

export function Navigation() {
  const { handleUser, USERS } = useContext(DataContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate('/') : navigate('/auth');

    setIsLoggedIn((prevState) => !prevState)
  };

  function userClick() {
    handleUser(USERS[0]);
  }

  return (
      <header>
        <Link className="linkWrp" to="/" style={{textDecoration:'none'}}>
          <div className={styles.logo}><DiamondIcon style={{fontSize: '40px', marginTop: '3px', marginRight:'4px'}}></DiamondIcon>What's UP</div>
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItems}>
              {!isLoggedIn && <NavLink to="/user" onClick={userClick}>Profile</NavLink>}
            </li>

            <li className={styles.menuItems}>
              {!isLoggedIn && <NavLink to="/friends">Friends</NavLink>}
            </li>

            <li className={styles.menuItems}>
              {!isLoggedIn && <NavLink to="/chat">Chat</NavLink>}
            </li>

            <li className={styles.menuItems}>
              <button onClick={toggleAuth}>{isLoggedIn ? 'Login' : 'Logout'}</button>
            </li>
          </ul>
        </nav>
      </header>
  );
}
