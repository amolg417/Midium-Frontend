import React from "react";
import styles from "./card.module.css";
import Link from "next/link";
import Image from "next/image";
import { SERVER_URL } from "@/api-utils.js/api-utils";
const Card = ({ item }) => {
  return (
    <div className={styles.container}>
      {item.Image && (
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
        <div className={styles.detail}>
          <span className={styles.date}>
            {`${new Date(item?.CreatedAt).getDay()}-${new Date(
              item?.CreatedAt
            ).getMonth()}-${new Date(item?.CreatedAt).getFullYear()}`}
          </span>
          <span className={styles.category}>{item.Category}</span>
        </div>
        <Link href={`/posts/${item?._id}`}>
          <h1>{item.Title}</h1>
        </Link>
        <div className={styles.desc}>
          {item?.Description.substring(0, 80)}...
        </div>
        <Link href={`/posts/${item?._id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
