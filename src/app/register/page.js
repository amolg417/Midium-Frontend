"use client";
import React, { useContext, useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userRegister } from "@/api-utils.js/api-utils";
import { AuthContext } from "@/context/AuthContextProvider";
const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter();
  let { token } = useContext(AuthContext);
  setTimeout(() => {
    if (token) {
      router.push("/");
    }
  });
  let [avatar, setAvatar] = useState("");
  function Validation(Name, Email, avatar, Password) {
    let errorDescription = "";
    if (
      Name.trim() === "" ||
      Email.trim() === "" ||
      !avatar?.name ||
      Password.trim() === ""
    ) {
      errorDescription = "All Fields Must Be Filled";
    }
    return errorDescription;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    let error = Validation(name, email, avatar, password);
    if (!error) {
      let formdata = new FormData();
      formdata.append("Name", name);
      formdata.append("Email", email);
      formdata.append("Password", password);
      formdata.append("avatar", avatar);
      try {
        let res = await userRegister(formdata);
        console.log(res);
        if (res.message === "User is Registered Successsfully") {
          router.push("/login");
        }
      } catch (err) {
        setError(err.message);
      }
    } else {
      setError(error);
    }
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to Write</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label htmlFor="profile">
          <div className={styles.circle}>Profile Pic</div>
        </label>
        <input
          type="file"
          id="profile"
          name="avatar"
          style={{ display: "none" }}
          onChange={(e) => setAvatar(e.currentTarget.files[0])}
        />
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
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
        <button className={styles.button}>Register</button>
        {error && "Something went wrong!"}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
