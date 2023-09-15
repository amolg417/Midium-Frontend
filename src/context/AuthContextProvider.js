"use client";
import React, { createContext, useEffect, useState } from "react";
export let AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  let [token, setToken] = useState("");
  useEffect(()=>{
    if (typeof window !== 'undefined') {
      setToken(sessionStorage.getItem('token'));
    }

  },[])
  return (
    <AuthContext.Provider
      value={{
        token:token,
        Login: (token) => {
          sessionStorage.setItem("token", token);
          setToken(sessionStorage.getItem("token"));
        },
        Logout: () => {
          sessionStorage.removeItem("token");
          setToken(sessionStorage.getItem("token"));
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
