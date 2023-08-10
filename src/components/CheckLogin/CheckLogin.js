import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckLogin({ children }) {
   const navigate = useNavigate();
   const location = useLocation();

   useEffect(() => {
      if (location.pathname !== "/auth" && !localStorage.getItem("tk")) {
         navigate("/auth");
      }
   }, [location]);

   return <div>{children}</div>;
}
