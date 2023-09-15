"use client";
import React, { useContext, useState } from "react";
import styles from "./writePage.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { createPost } from "@/api-utils.js/api-utils";
import { AuthContext } from "@/context/AuthContextProvider";
const WritePage = () => {
  const router = useRouter();
  let { token } = useContext(AuthContext);
  if (!token) {
    router.push("/");
  }

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");
  const [cat, setCatSlug] = useState("style");
  const handleSubmit = async () => {
    try {
      let postData = new FormData();
      postData.append("Title", title);
      postData.append("Desc", desc);
      postData.append("Category", cat);
      postData.append("image", file);
      let res = await createPost(postData, token);
      if (res?.data) {
        router.push(`/posts/${res?.data._id}`);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className={styles.container}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        className={styles.input}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className={styles.select}
        value={cat}
        onChange={(e) => setCatSlug(e.target.value)}
      >
        <option value="Style">Style</option>
        <option value="Fashion">Fashion</option>
        <option value="Food">Food</option>
        <option value="Culture">Culture</option>
        <option value="Travel">Travel</option>
        <option value="Coding">Coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input
              type="file"
              id="image"
              onChange={(e) => setFile(e.target.files[0])}
              style={{ display: "none" }}
            />
            <button className={styles.addButton}>
              <label htmlFor="image">
                <Image src="/image.png" alt="" width={16} height={16} />
              </label>
            </button>
          </div>
        )}
        <textarea
          className={styles.textArea}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Tell your story..."
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>
        Publish
      </button>
    </div>
  );
};

export default WritePage;
