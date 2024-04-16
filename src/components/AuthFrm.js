import { useState, useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./AuthFrm.module.scss";
import { DataContext } from "./AppData/AppData";

export function AuthFrm() {
   const { setIsLoggedIn } = useContext(DataContext);
   const [isLogin, setIsLogin] = useState(true);
   const [error, setError] = useState("");

   const emailInputRef = useRef();
   const passwordInputRef = useRef();
   const nameInputRef = useRef();
   const cityInputRef = useRef();
   const countryInputRef = useRef();
   const schoolCityInputRef = useRef();

   const navigate = useNavigate();

   const toggleAuthState = () => {
      setIsLogin((prevState) => !prevState);
   };

   useEffect(() => {
      if (localStorage.getItem("tk")) {
         navigate("/home");
      }
   }, []);

   const clearError = () => {
      setTimeout(() => {
         setError("");
      }, 4000);
   };

   const submitHandler = async (event) => {
      event.preventDefault();

      const emailValue = emailInputRef.current.value;
      const passwordValue = passwordInputRef.current.value;
      try {
         if (isLogin) {
            const response = await axios.post("/users/login", {
               email: emailValue,
               password: passwordValue,
            });
            localStorage.setItem("tk", response.data.plainTextToken);
            setIsLoggedIn(true);
            navigate("/home");

            // const res = axios.get("");
         } else {
            const nameValue = nameInputRef.current.value;
            const cityValue = cityInputRef.current.value;
            const countryValue = countryInputRef.current.value;
            const schoolCityValue = schoolCityInputRef.current.value;
            axios
               .post("/users/register", {
                  name: nameValue,
                  email: emailValue,
                  password: passwordValue,
                  country: countryValue,
                  city: cityValue,
                  school_city: schoolCityValue,
               })
               .then((response) => {
                  navigate("/auth");
                  setIsLogin(true);
                  emailInputRef.current.value = "";
                  passwordInputRef.current.value = "";
               })
               .catch((error) => {
                  setError(error.response.data.message);
               });
         }
      } catch (error) {
         setError(error.response.data);
      }
   };

   return (
      <div
         className={`${styles.autentification} bg-primary justify-center items-center`}
      >
         <span className="text-red-600 font-bold text-2xl">{error}</span>
         <h1 className="text-4xl font-bold mb-6">
            {isLogin ? "Login" : "Sign up"}
         </h1>

         <form onSubmit={submitHandler} className="w-3/4">
            {!isLogin ? (
               <div
                  className={`${styles.control} grid grid-cols-2 gap-x-3 gap-y-2`}
               >
                  <div>
                     <label htmlFor="name">Enter your name</label>
                     <input
                        type="text"
                        id="name"
                        required
                        ref={nameInputRef}
                     ></input>
                  </div>
                  <div>
                     <label htmlFor="country">Enter your country</label>
                     <input
                        type="text"
                        id="country"
                        required
                        ref={countryInputRef}
                     ></input>
                  </div>
                  <div>
                     <label htmlFor="city">Enter your city</label>
                     <input
                        type="text"
                        id="city"
                        required
                        ref={cityInputRef}
                     ></input>
                  </div>
                  <div>
                     <label htmlFor="school_city">Enter your School City</label>
                     <input
                        type="text"
                        id="school_city"
                        required
                        ref={schoolCityInputRef}
                     ></input>
                  </div>
               </div>
            ) : (
               ""
            )}

            <div className={`${styles.control}`}>
               <label htmlFor="email">Enter your email</label>
               <input
                  type="email"
                  id="email"
                  required
                  ref={emailInputRef}
               ></input>
            </div>

            <div className={styles.control}>
               <label htmlFor="password">Enter your password</label>
               <input
                  type="password"
                  id="password"
                  required
                  ref={passwordInputRef}
               ></input>
            </div>

            <div className={styles.actions}>
               <button
                  className={`${styles.toggle} bg-primary`}
                  onClick={clearError}
               >
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
