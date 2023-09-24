import React from "react";
import styles from "./menupost.module.css";
import Image from "next/image";
import Link from "next/link";
import { SERVER_URL } from "@/api-utils.js/api-utils";
const MenuPost = ({ withImage, post }) => {
  return (
    <div className={styles.items}>
      {post?.map((item) => (
        <Link
          href={`/posts/${item._id}`}
          key={item?._id}
          className={styles.item}
        >
          {withImage && (
            <div className={styles.imageContainer}>
              <Image
                src={`${SERVER_URL}/blogimages/${item.Image}`}
                alt=""
                fill
                className={styles.image}
              />
            </div>
          )}
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles[item.Category]}`}>
              {item.Category}
            </span>
            <Link href={`/posts/${item._id}`}>
              <h3 className={styles.postTitle}>{item?.Title}</h3>
            </Link>
            <div className={styles.detail}>
              <span className={styles.username}>{item?.User?.Name}</span>
              <span className={styles.date}>{`${new Date(
                item?.CreatedAt
              ).getDay()}-${new Date(item?.CreatedAt).getMonth()}-${new Date(
                item?.CreatedAt
              ).getFullYear()}`}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPost;
