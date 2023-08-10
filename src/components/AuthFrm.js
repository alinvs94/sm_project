import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AuthFrm.module.scss";
import { DataContext } from "./AppData/AppData";

export function AuthFrm() {
   const { setIsLoggedIn } = useContext(DataContext);
   const [isLogin, setIsLogin] = useState(true);

   const usernameInputRef = useRef();
   const passwordInputRef = useRef();
   const nameInputRef = useRef();

   const navigate = useNavigate();

   const toggleAuthState = () => {
      setIsLogin((prevState) => !prevState);
   };

   useEffect(() => {
      if (localStorage.getItem("tk")) {
         navigate("/home");
      }
   }, []);

   const submitHandler = async (event) => {
      event.preventDefault();

      const usernameValue = usernameInputRef.current.value;
      const passwordValue = passwordInputRef.current.value;
      try {
         if (isLogin) {
            const response = await axios.post("/users/login", {
               email: usernameValue,
               password: passwordValue,
            });
            localStorage.setItem("tk", response.data.plainTextToken);
            setIsLoggedIn(true);
            console.log('here');
            navigate("/home");
         } else {
            const nameValue = nameInputRef.current.value;
            axios
               .post("/users/register", {
                  name: nameValue,
                  email: usernameValue,
                  password: passwordValue,
               })
               .then((response) => {
                  navigate("/auth");
               });
         }
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <div
         className={`${styles.autentification} bg-primary justify-center items-center`}
      >
         <h1 className="text-4xl font-bold mb-6">
            {isLogin ? "Login" : "Sign up"}
         </h1>

         <form onSubmit={submitHandler} className="w-3/4">
            {!isLogin ? (
               <div className={styles.control}>
                  <label htmlFor="name">Enter yout name</label>
                  <input
                     type="text"
                     id="name"
                     required
                     ref={nameInputRef}
                  ></input>
               </div>
            ) : (
               ""
            )}

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
