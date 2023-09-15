"use client";
import React, { useContext, useState } from "react";
import styles from "./login.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContextProvider";
import { userLogin } from "@/api-utils.js/api-utils";
const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  let { Login } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const Email = e.target[0].value;
    const Password = e.target[1].value;
    let credentials = { Email, Password };
    try {
      let res = await userLogin(credentials);
      console.log(res)
      if(res?.token){
        Login(res?.token);
        router.push("/");
      }else{
        setError(res.message)
      }

    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome</h1>
      <h2 className={styles.subtitle}>Please sign in to Write.</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>
        {error && error}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/register">
        Create new account
      </Link>
    </div>
  );
};

export default page;
