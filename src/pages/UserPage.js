import { useContext } from "react";
import { ProfilePage } from "../components/ProfilePage/ProfilePage";
import { DataContext } from "../components/AppData/AppData";

export function UserPage() {
   const { clickedUser } = useContext(DataContext);
   if (clickedUser) {
      return <ProfilePage></ProfilePage>;
   }
}
