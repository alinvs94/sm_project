import { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/AppData/AppData";
import { Alert } from "@mui/material";
import Fade from "@mui/material/Fade";
import axios from "axios";
import { Link } from "react-router-dom";

export default function FriendsPage() {
   const { usersList, loggedUser, friendsList, handleUser, handleClick } =
      useContext(DataContext);
   const [message, setMessage] = useState(false);
   const [alert, setAlert] = useState(false);

   const clearMessage = () => {
      setTimeout(() => {
         setMessage(false);
         setAlert(false);
      }, 2000);
   };

   const addFriend = async (friend_id) => {
      try {
         await axios.post("/friend/add", {
            user_id: `${loggedUser.id}`,
            friend_id: friend_id,
         });
         setMessage(true);
      } catch (error) {
         console.log(error.response.data.message);
         setAlert(true);
      }
   };

   const removeFriend = async (friend_id) => {
      try {
         await axios.post("/friend/remove", {
            user_id: `${loggedUser.id}`,
            friend_id: friend_id,
         });
         setMessage(true);
      } catch {
         try {
            await axios.post("/friend/remove", {
               user_id: friend_id,
               friend_id: `${loggedUser.id}`,
            });
            setMessage(true);
         } catch (error) {
            console.log(error.response.data.message);
            setAlert(true);
         }
      }
   };

   const friendsListElement =
      friendsList &&
      friendsList.map((friend, index) => {
         return (
            <div
               key={index}
               className="flex flex-col items-center justify-between mt-2 border p-3 border-gray-300 rounded-md bg-secondary"
            >
               <div className="flex flex-col items-center">
                  <img
                     src={friend.picture}
                     className="w-40 rounded hover:opacity-80 cursor-pointer"
                     alt="profilePic"
                     onClick={(e) => {
                        handleUser(friend);
                     }}
                  />

                  <div className="flex gap-4 font-bold text-xl mt-4">
                     <span
                        className="hover:text-quaternary cursor-pointer"
                        onClick={(e) => {
                           handleUser(friend);
                        }}
                     >
                        {friend.name}
                     </span>
                  </div>
               </div>
               <button
                  onClick={(e) => {
                     removeFriend(friend.id);
                     handleClick();
                     clearMessage();
                  }}
                  className="border border-gray-400 p-1 rounded-md text-white text-lg font-bold bg-primary hover:bg-quaternary "
               >
                  Unfriend
               </button>
            </div>
         );
      });

   const list =
      usersList &&
      usersList.map((user, index) => {
         const checkFriend =
            friendsList &&
            friendsList.find((friend) => {
               return user.email === friend.email;
            });
         if (!checkFriend && user.email !== loggedUser.email) {
            return (
               <div
                  key={index}
                  className="flex grid-cols- items-center justify-between mt-2 border p-3 border-gray-300 rounded-md bg-secondary"
               >
                  <div>
                     <img
                        src={user.picture}
                        className="w-20 rounded-full hover:opacity-80 cursor-pointer"
                        alt="profilePic"
                        onClick={(e) => {
                           handleUser(user);
                        }}
                     />
                     <div className="flex gap-4 font-bold text-xl  mt-4">
                        <span
                           className="hover:text-quaternary cursor-pointer"
                           onClick={(e) => {
                              handleUser(user);
                           }}
                        >
                           {user.name}
                        </span>
                     </div>
                  </div>

                  <div>
                     <button
                        onClick={(e) => {
                           addFriend(user.id);
                           handleClick();
                           clearMessage();
                        }}
                        className="border border-gray-400 p-1 rounded-md text-white text-lg font-bold bg-primary hover:bg-quaternary "
                     >
                        Add Friend
                     </button>
                  </div>
               </div>
            );
         }
         return null;
      });

   return (
      <div className="flex flex-col items-center justify-center mt-20 relative">
         <Fade in={message}>
            <span className="top-20 fixed">
               <Alert severity="success">Success!</Alert>
            </span>
         </Fade>

         <Fade in={alert}>
            <span className="top-20 fixed">
               <Alert severity="warning">Something went wrong!</Alert>
            </span>
         </Fade>

         <div className="w-11/12 mt-10">
            <span className="font-bold text-3xl justify-start text-primary">
               {friendsList && friendsList.length > 0
                  ? "Your friends list"
                  : "You've got no friends"}
            </span>
            <div className="grid grid-cols-6 gap-2">{friendsListElement}</div>
         </div>
         <div className="w-11/12 mt-10">
            <span className="font-bold text-3xl justify-start text-primary">
               Someone you may know
            </span>
            {list}
         </div>
      </div>
   );
}
