"use client";
import React, { useContext } from "react";
import styles from "./menucategories.module.css";
import Link from "next/link";
import { CategoryContext } from "@/context/CategoryContextProvider";
const Menucategories = () => {
  let { data } = useContext(CategoryContext);
  return (
    <div className={styles.categoryList}>
      {data?.map((item) => (
        <Link
          key={item}
          href={`/blog/posts?category=${item}`}
          className={`${styles.categoryItem} ${styles[item]}`}
        >
          {item}
        </Link>
      ))}
    </div>
  );
};

export default Menucategories;
