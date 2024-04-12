import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { Layout } from "./components/Layout";
import { AppData } from "./components/AppData/AppData";
import CheckLogin from "./components/CheckLogin/CheckLogin";
import FriendsPage from "./pages/FriendsPage";
import { UserPage } from "./components/UserPage/UserPage";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";

function App() {
   return (
      <AppData>
         <Layout>
            <CheckLogin>
               <Routes>
                  <Route path="/home" element={<HomePage></HomePage>}></Route>
                  <Route path="/profile/:name" element={<ProfilePage></ProfilePage>}></Route>
                  <Route path="/user/:name" element={<UserPage></UserPage>}></Route>
                  <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
                  <Route path="/friends" element={<FriendsPage></FriendsPage>}></Route>
               </Routes>
            </CheckLogin>
         </Layout>
      </AppData>
   );
}

export default App;
