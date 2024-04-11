import { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/AppData/AppData";
import axios from "axios";

export default function FriendsPage() {
   const { USERS, clickedUser, FRIENDS } = useContext(DataContext);
   const [error, setError] = useState("");

   const addFriend = async (name, email) => {
      try {
         const res = await axios.post("/friends/add", {
            name: name,
            email: email,
            user_id: clickedUser.id,
         });
      } catch (error) {
         setError("User already your friend");
      }
   };

   const clearError = () => {
      setTimeout(() => {
         setError("");
      }, 2000);
   };

   const friendList =
      FRIENDS &&
      FRIENDS.map((friend, index) => {
         return (
            <div
               key={index}
               className="flex grid-cols-2 w-11/12 items-center justify-between mt-2 border p-3 border-gray-400 rounded-md"
            >
               <div>
                  <div className="flex gap-4 font-bold text-xl  mt-4">
                     <span>{friend.name}</span>
                     <span hidden>{friend.email}</span>
                  </div>
               </div>
            </div>
         );
      });

   const list =
      USERS &&
      USERS.map((user, index) => {
         return (
            <div
               key={index}
               className="flex grid-cols-2 w-11/12 items-center justify-between mt-2 border p-3 border-gray-400 rounded-md"
            >
               <div>
                  <img src={user.picture} className="w-20 rounded-full"></img>
                  <div className="flex gap-4 font-bold text-xl  mt-4">
                     <span>{user.name}</span>
                     <span hidden>{user.email}</span>
                     <span>{user.country}</span>
                  </div>
               </div>

               <div>
                  <button
                     onClick={(e) => {
                        addFriend(user.name, user.email);
                        clearError();
                     }}
                     className="border border-gray-400 p-1 rounded-md text-white bg-primary "
                  >
                     Friend Request
                  </button>
               </div>
            </div>
         );
      });

   return (
      <div className="flex flex-col w-full items-center justify-center mt-20">
         <span className="text-red-600 font-bold text-2xl">{error}</span>

         <div className="w-11/12 mt-10">
            <span className="font-bold text-3xl justify-start">
               {FRIENDS.length > 0
                  ? "Your friends list"
                  : "You've got no friends"}
            </span>
            {friendList}
         </div>
         <div className="w-11/12 mt-10">
            <span className="font-bold text-3xl justify-start">
               Someone you may know
            </span>
            {list}
         </div>
      </div>
   );
}
