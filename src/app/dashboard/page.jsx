"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
import React from 'react';
// next.js hook for fetching
import useSWR from 'swr';
import styles from "./page.module.css";
import Image from 'next/image';
// import Post from '@/models/Post';


const Dashboard = () => {
  // OLD WAY TO FETCH DATA

  // // using useEffect
  // const [data, setData] = useState([]);
  // const [err, setErr] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  //     if (!res.ok) {
  //       setErr(true);
  //     }

  //     const result = await res.json();
  //     setData(result);
  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [])

  // console.log("data", data);


  // recommended if you fetching data on the client-side
  const session = useSession();
  // console.log("session", session);
  // NEW WAY TO FETCH DATA
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher);

  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const img = e.target[2].value;
    const content = e.target[3].value;

    try {
      await fetch('/api/posts', {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          img,
          content,
          username: session.data.user.name,
        })
      })
      // данные обновляются без перезагрузки страницы
      mutate();
      e.target.reset();

    } catch (err) {
      console.log(err);
    }
  }

  const handleDelete = async (id) => {

    try {
      await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      })

      // данные обновляются без перезагрузки страницы
      mutate();

    } catch (err) {
      console.log(err);
    }
  }


  if (session.status === "authenticated") {
    // console.log("data", data);


    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? <p>Loading...</p>
            : data?.map(post => (
              <div key={post._id} className={styles.post}>
                <div className={styles.imgContainer}>
                  <Image src={post.img} alt={post.title} fill={true} />
                </div>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <span className={styles.delete} onClick={() => handleDelete(post._id)}>X</span>
              </div>))}
        </div>

        <form className={styles.new} onSubmit={handleSubmit}>
          <h1>Add New Post</h1>
          <input type='text' placeholder='Title' className={styles.input} />
          <input type='text' placeholder='Description' className={styles.input} />
          <input type='text' placeholder='Image' className={styles.input} />
          <textarea placeholder='Content' className={styles.textarea} cols="30" rows="10"></textarea>
          <button className={styles.sendBtn}>Send</button>
        </form>
      </div>
    )
  }
}


export default Dashboard;