"use client";
import React, { useContext, useState } from 'react'
import styles from './authlink.module.css'
import Link from 'next/link';
import { AuthContext } from '@/context/AuthContextProvider';
import { useRouter } from 'next/navigation';
const Authlink = () => {
const [open, setOpen] = useState(false);
let {token,Logout}=useContext(AuthContext)
let router=useRouter()
  return (
    <>
      {token ? (
       <>
       <Link href="/write" className={styles.link}>
         Write
       </Link>
       <span className={styles.link} onClick={()=>{Logout();router.push('/')}}>
         Logout
       </span>
     </>
      ) : (
        <>
          <Link href="/login" className={styles.link}>
          Login
        </Link>
          <Link href="/register" className={styles.link}>
          Register
        </Link>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link onClick={()=>setOpen(false)} href="/">Homepage</Link>
          {!token ? (
            <Link href="/login" onClick={()=>setOpen(false)}>Login</Link>
          ) : (
            <>
              <Link href="/write" onClick={()=>setOpen(false)}>Write</Link>
              <span onClick={()=>{router.push('/');Logout();setOpen(false)}} >Logout</span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default Authlink
