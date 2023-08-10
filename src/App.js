import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { Layout } from "./components/Layout";
import { UserPage } from "./pages/UserPage";
import { AppData } from "./components/AppData/AppData";
import axios from "axios";
import CheckLogin from "./components/CheckLogin/CheckLogin";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";
if (localStorage.getItem("tk") !== undefined) {
   axios.defaults.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "__tk"
   )}`;
} else {
   delete axios.defaults.headers["Authorization"];
}

function App() {
   return (
      <AppData>
         <Layout>
            <CheckLogin>
               <Routes>
                  <Route path="/home" element={<HomePage></HomePage>}></Route>
                  <Route path="/user" element={<UserPage></UserPage>}></Route>
                  <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
               </Routes>
            </CheckLogin>
         </Layout>
      </AppData>
   );
}

export default App;
