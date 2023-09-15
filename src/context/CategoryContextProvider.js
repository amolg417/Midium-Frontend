"use client";
import { getCategory } from "@/api-utils.js/api-utils";
import React, { createContext, useEffect, useState } from "react";
export let CategoryContext = createContext();
function CategoryContextProvider({ children }) {
  let [data, setData] = useState([]);

  useEffect(() => {
    getCategory().then((data) => setData(data));
  }, []);
  return (
    <CategoryContext.Provider value={{ data }}>
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryContextProvider;
