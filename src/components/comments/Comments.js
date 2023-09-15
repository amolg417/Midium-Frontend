"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styles from "./comment.module.css";
import { createComment, getAllComments } from "@/api-utils.js/api-utils";
import { AuthContext } from "@/context/AuthContextProvider";

const Comments = ({ postId }) => {
  let [isLoading, setIsLoading] = useState(true);
  let { token } = useContext(AuthContext);
  let [data, setData] = useState([]);
  let [Description,setDescription]=useState("")
  let [error,setError]=useState("")
  useEffect(() => {
    getAllComments(postId)
      .then(({ data }) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err.message));
  }, [isLoading,postId]);

  function handleSubmit() {
    let comment={
      Description:Description
    }
    setIsLoading(true)
    createComment(comment,postId,token)
    .then((res)=>{
      if(res?.data){
        setIsLoading(false)
        setDescription("")
        setError("")
      }else{
        setDescription("")
        setError(res.message)
      }

    }).catch((err)=>{
      console.log(err.message)
    })

  }
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {token ? (
        <>
        <div className={styles.write}>
          <textarea
            placeholder="write a comment..."
            className={styles.input}
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className={styles.button} onClick={handleSubmit}>
            Send
          </button>
        </div>
        {error && error}
        </>
      ) : (
        <Link  href="/login"><button className={styles.button}>Login to write a comment</button></Link>
        )}
      <div className={styles.comments}>
        {isLoading
          ? "Loading Comments..."
          : data?.map((item) => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.User?.Profile && (
                    <Image
                      src={`https://midiumlite.onrender.com/profiles/${item?.User?.Profile}`}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.User.Name}</span>
                    <span className={styles.date}>{`${new Date(
                      item?.CreatedAt
                    ).getDay()}-${new Date(
                      item?.CreatedAt
                    ).getMonth()}-${new Date(
                      item?.CreatedAt
                    ).getFullYear()}`}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.Description}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
