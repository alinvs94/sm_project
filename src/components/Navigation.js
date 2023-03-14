import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";

import DiamondIcon from '@mui/icons-material/Diamond';

export function Navigation() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleAuth = () => {
    isLoggedIn ? navigate('/') : navigate('/auth');

    setIsLoggedIn((prevState) => !prevState)
  };

  return (
      <header>
        <Link className="linkWrp" to="/">
          <div className={styles.logo}><DiamondIcon style={{fontSize: '40px', marginTop: '3px', marginRight:'4px'}}></DiamondIcon>What's UP</div>
        </Link>

        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItems}>
              {!isLoggedIn && <NavLink to="/user">Profile</NavLink>}
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
