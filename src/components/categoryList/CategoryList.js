"use client";
import React, { useContext } from "react";
import styles from "./categorylist.module.css";
import Link from "next/link";
import { CategoryContext } from "@/context/CategoryContextProvider";
const CategoryList = () => {
  let { data } = useContext(CategoryContext);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {data?.map((item) => (
          <Link
            href={`/blog/posts?category=${item}`}
            className={`${styles.category} ${styles[item]}`}
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
