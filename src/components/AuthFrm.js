import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./AuthFrm.module.scss";

export function AuthFrm() {
   const [isLogin, setIsLogin] = useState(true);

   const usernameInputRef = useRef();
   const passwordInputRef = useRef();

   const navigate = useNavigate();

   const toggleAuthState = () => {
      setIsLogin((prevState) => !prevState);
   };

   const submitHandler = async (event) => {
      event.preventDefault();

      const usernameValue = usernameInputRef.current.value;
      const passwordValue = passwordInputRef.current.value;

      if (isLogin) {
         const response = await axios.post(
            "http://127.0.0.1:8000/api/users/login",
            {
               email: usernameValue,
               password: passwordValue,
            }
         );
         console.log(response.data);
      } else {
         axios
            .post("https://reqres.in/api/register", {
               username: usernameValue,
               password: passwordValue,
            })
            .then((response) => {
               navigate("/");
            })
            .catch((error) => {
               usernameInputRef.current.value = "";
               passwordInputRef.current.value = "";
            });
      }

      navigate("/");
   };

   return (
      <div
         className={`${styles.autentification} bg-primary justify-center items-center`}
      >
         <h1 className="text-4xl font-bold mb-6">
            {isLogin ? "Login" : "Sign up"}
         </h1>

         <form onSubmit={submitHandler} className="w-3/4">
            <div className={`${styles.control}`}>
               <label htmlFor="email">Enter yout email</label>
               <input
                  type="email"
                  id="email"
                  required
                  ref={usernameInputRef}
               ></input>
            </div>

            <div className={styles.control}>
               <label htmlFor="password">Enter yout password</label>
               <input
                  type="password"
                  id="password"
                  required
                  ref={passwordInputRef}
               ></input>
            </div>

            <div className={styles.actions}>
               <button className={`${styles.toggle} bg-primary`}>
                  {isLogin ? "Login" : "Create new account"}
               </button>
               <button
                  className={`${styles.toggle} bg-primary`}
                  onClick={toggleAuthState}
               >
                  {isLogin
                     ? "Create new account"
                     : "Login with an existing account"}
               </button>
            </div>
         </form>
      </div>
   );
}
