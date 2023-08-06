import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AuthPage } from "./pages/AuthPage";
import { Layout } from "./components/Layout";
import { UserPage } from "./pages/UserPage";
import { AppData } from "./components/AppData/AppData";

function App() {
   return (
      <AppData>
         <Layout>
            <Routes>
               <Route path="/home" element={<HomePage></HomePage>}></Route>
               <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
               <Route path="/user" element={<UserPage></UserPage>}></Route>
            </Routes>
         </Layout>
      </AppData>
   );
}

export default App;
