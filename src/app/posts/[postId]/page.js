import React from "react";
import styles from "./singlepage.module.css";
import Image from "next/image";
import { getSinglePost } from "@/api-utils.js/api-utils";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";
const SinglePage = async ({ params }) => {
  let { postId } = params;
  let { data } = await getSinglePost(postId);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.Title}</h1>
          <div className={styles.user}>
            {data?.User?.Profile && (
              <div className={styles.userImageContainer}>
                <Image
                  src={`https://midiumlite.onrender.com/profiles/${data?.User?.Profile}`}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data?.User?.Name}</span>
              <span className={styles.date}>{`${new Date(
                data?.CreatedAt
              ).getDay()}-${new Date(data?.CreatedAt).getMonth()}-${new Date(
                data?.CreatedAt
              ).getFullYear()}`}</span>
            </div>
          </div>
        </div>
        {data?.Image && (
          <div className={styles.imageContainer}>
            <Image
              src={`https://midiumlite.onrender.com/blogimages/${data?.Image}`}
              alt=""
              fill
              className={styles.image}
            />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>{data?.Description}</div>
          <div className={styles.comment}>
            <Comments postId={postId} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
