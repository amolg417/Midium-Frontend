import React from 'react'
import styles from './menu.module.css'
import MenuPost from '../menupost/MenuPost'
import Menucategories from '../menuCategories/Menucategories'
import { getPopularPost, getUserPickedPost } from '@/api-utils.js/api-utils'
const Menu = async() => {
  let userPicked=await getUserPickedPost()
  let PopularPost=await getPopularPost()

  return (
    <div className={styles.container}>
    <h2 className={styles.subtitle}>{"What's hot"}</h2>
    <h1 className={styles.title}>Most Popular</h1>
    <MenuPost withImage={false} post={PopularPost.data} />
    <h2 className={styles.subtitle}>Discover by topic</h2>
    <h1 className={styles.title}>Categories</h1>
    <Menucategories />
    <h2 className={styles.subtitle}>Chosen by the editor</h2>
    <h1 className={styles.title}>Editors Pick</h1>
    <MenuPost withImage={true} post={userPicked.data} />
  </div>
  )
}

export default Menu
