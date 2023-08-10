import { useState, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { DataContext } from "./AppData/AppData";

import DiamondIcon from "@mui/icons-material/Diamond";

export function Navigation() {
   const { handleUser, USERS, isLoggedIn, handleLogClick, setIsLoggedIn } = useContext(DataContext);
  

   const navigate = useNavigate();

   useEffect(() => {
      if (localStorage.getItem("tk")) {
         setIsLoggedIn(true);
      }
   }, []);

   function userClick() {
      handleUser(USERS[0]);
   }

  

   return (
      <header>
         <Link
            className="linkWrp"
            to="/home"
            style={{ textDecoration: "none" }}
         >
            <div className={styles.logo}>
               <DiamondIcon
                  style={{
                     fontSize: "40px",
                     marginTop: "3px",
                     marginRight: "4px",
                  }}
               ></DiamondIcon>
               What's UP
            </div>
         </Link>

         <nav>
            <ul className={styles.menu}>
               <li className={styles.menuItems}>
                  {isLoggedIn && (
                     <NavLink to="/user" onClick={userClick}>
                        Profile
                     </NavLink>
                  )}
               </li>

               <li className={styles.menuItems}>
                  {isLoggedIn && <NavLink to="/friends">Friends</NavLink>}
               </li>

               <li className={styles.menuItems}>
                  {isLoggedIn && <NavLink to="/chat">Chat</NavLink>}
               </li>

               <li className={styles.menuItems}>
                  <input
                     className="cursor-pointer"
                     type="button"
                     onClick={handleLogClick}
                     value={isLoggedIn ? "Logout" : "Login"}
                  />
               </li>
            </ul>
         </nav>
      </header>
   );
}
