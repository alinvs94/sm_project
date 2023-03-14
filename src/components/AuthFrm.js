import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import styles from "./AuthFrm.module.scss";

export function AuthFrm() {
  const [isLogin, setIsLogin] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const usernameInputRef = useRef();
  const passwordInputRef = useRef();

  const navigate = useNavigate();

  const toggleAuthState = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    let usernameValue = usernameInputRef.current.value;
    let passwordValue = passwordInputRef.current.value;

    usernameValue = "eve.holt@reqres.in";
    passwordValue = "cityslicka";

    setIsLoading(true);

    if (isLogin) {
      axios
        .post("https://reqres.in/api/login", {
          username: usernameValue,
          password: passwordValue,
        })
        .then((response) => {
          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
          usernameInputRef.current.value = "";
          passwordInputRef.current.value = "";
        });
    } else {
      axios
        .post("https://reqres.in/api/register", {
          username: usernameValue,
          password: passwordValue,
        })
        .then((response) => {
          setIsLoading(false);
          navigate("/");
        })
        .catch((error) => {
          setIsError(true);
          setIsLoading(false);
          usernameInputRef.current.value = "";
          passwordInputRef.current.value = "";
        });
    }

    navigate("/");
  };

  const actionIsNotLoading = <button>{isLogin ? "Login" : "Create new account"}</button>;
  

  return (
    <div className={styles.autentification}>
      <h1>{isLogin ? "Login" : "Sign up"}</h1>

      <form onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="email">Enter yout email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            ref={usernameInputRef}
          ></input>
        </div>

        <div className={styles.control}>
          <label htmlFor="password">Enter yout password</label>
          <input
            type="password"
            id="password"
            required
            placeholder="Enter your password"
            ref={passwordInputRef}
          ></input>
        </div>

        <div className={styles.actions}>
          {isError && <p>Please try again</p>}
          {isLoading && <p>Sending request...</p>}
          {!isLoading && actionIsNotLoading}
          <button className={styles.toggle} onClick={toggleAuthState}>
            {isLogin ? "Create new account" : "Login with an existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}
