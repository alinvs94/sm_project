import { ProfilePage } from "../components/ProfilePage/ProfilePage";
import { DataContext } from "../components/AppData/AppData";
import { useContext } from "react";

export function UserPage() {
   const { handleUser } = useContext(DataContext);

   return <ProfilePage></ProfilePage>;
}
