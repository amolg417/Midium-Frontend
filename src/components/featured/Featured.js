import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { SERVER_URL, getPost } from "@/api-utils.js/api-utils";
import Link from "next/link";

const Featured = async () => {
  let data = await getPost();
  let indexNumber = Math.floor(Math.random() * data.data.posts?.length);
  data = data?.data?.posts[indexNumber];
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Amol here!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src={`${SERVER_URL}/blogimages/${data?.Image}`}
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{data?.Title}</h1>
          <p className={styles.postDesc}>
            {data?.Description.substring(0, 100)}...
          </p>
          <Link href={`/posts/${data?._id}`}>
            <button className={styles.button}>Read More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
