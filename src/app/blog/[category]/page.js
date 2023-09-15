import CardList from "@/components/cardlist/CardList";
import Menu from "@/components/menu/Menu";
import React from "react";
import styles from "../blogPage.module.css";
const Blog = async ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { category } = searchParams;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{category} Blog</h1>
      <div className={styles.content}>
        <CardList page={page} category={category} />
        <Menu />
      </div>
    </div>
  );
};

export default Blog;
