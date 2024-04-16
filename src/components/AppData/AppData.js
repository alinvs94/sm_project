import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../ProfilePage/assets/userProfile.jpg";
import axios from "axios";

export const DataContext = createContext({});

export const AppData = ({ children }) => {
   const [USERS, setUSERS] = useState([]);
   const [FRIENDS, setFRIENDS] = useState([]);
   const [posts, setPosts] = useState([]);
   const [clickedUser, setClickedUser] = useState({});
   const [loggedUser, setLoggedUser] = useState({});
   const [numbArray, setNumbArray] = useState();
   const [birthdayNumb, setBirthdayNumb] = useState();
   const [userPicArray, setUserPicArray] = useState();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const pathname = window.location.pathname;

   const navigate = useNavigate();

   // Set axios headers

   axios.defaults.baseURL = "http://127.0.0.1:8000/api";
   useEffect(() => {
      if (localStorage.getItem("tk") !== undefined) {
         axios.defaults.headers[
            "Authorization"
         ] = `Bearer ${localStorage.getItem("tk")}`;
      } else {
         delete axios.defaults.headers["Authorization"];
      }
   }, [isLoggedIn]);

   // Get logged user

   useEffect(() => {
      const getLoggedUser = async () => {
         if (localStorage.getItem("tk")) {
            try {
               const res = await axios.get("/users/getCurrentUser");
               setLoggedUser(res.data);
            } catch (error) {
               console.log(error);
            }
         }
      };

      getLoggedUser();
   }, []);

   // Get all users

   useEffect(() => {
      const getAllUsers = async () => {
         try {
            const res = await axios.get("/users/index");
            setUSERS(res.data);
         } catch (error) {
            console.log(error);
         }
      };

      getAllUsers();
   }, [pathname]);

   // Get user friends list

   useEffect(() => {
      const getFRIENDSS = async () => {
         try {
            const res = await axios.get(`/friends/list/${loggedUser.id}`);
            setFRIENDS(res.data);
         } catch (error) {
            console.log(error);
         }
      };

      getFRIENDSS();
   }, [loggedUser]);

   // Get posts

   useEffect(() => {
      try {
         fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((res) => {
               setPosts((prevState) => {
                  return (prevState = res);
               });
            });
      } catch (error) {
         console.log(error);
      }
   }, []);

   const usersLength = USERS ? USERS.length : undefined;

   // Random post user array

   useEffect(() => {
      let randomNumbArray = [];
      while (randomNumbArray.length < 31) {
         let randomNumberPostUser = Math.floor(
            Math.random() * (usersLength - 1) + 1
         );
         if (randomNumbArray.indexOf(randomNumberPostUser === -1)) {
            randomNumbArray.push(randomNumberPostUser);
         }
      }
      setNumbArray((prevState) => (prevState = randomNumbArray));
   }, [usersLength]);

   // Random birthday number

   const friendsNum = FRIENDS.length;

   useEffect(() => {
      setBirthdayNumb(
         (prevState) =>
            (prevState = Math.floor(Math.random() * (friendsNum - 0)))
      );
   }, []);

   // Go to clicked user

   function handleUser(user) {
      navigate(`/user/${user.name}`);
      setClickedUser((prevState) => {
         return (prevState = user);
      });
   }

   // Get user pictures

   useEffect(() => {
      const picArray = [];
      for (let i = 0; i < 9; i++) {
         const pic = `https://picsum.photos/150/150?random=${
            clickedUser.id + i
         }`;
         picArray.push(pic);
      }
      setUserPicArray((prevState) => (prevState = picArray));
   }, [navigate]);

   const handleLogClick = async (e) => {
      const buttonValue = e.target.value;
      if (buttonValue === "Logout") {
         localStorage.clear("tk");
         navigate("/auth");
         setIsLoggedIn(false);
      } else {
         navigate("/auth");
      }
   };

   return (
      <DataContext.Provider
         value={{
            USERS,
            userPicArray,
            posts,
            numbArray,
            birthdayNumb,
            handleUser,
            clickedUser,
            setClickedUser,
            handleLogClick,
            isLoggedIn,
            setIsLoggedIn,
            FRIENDS,
            loggedUser,
         }}
      >
         {children}
      </DataContext.Provider>
   );
};
