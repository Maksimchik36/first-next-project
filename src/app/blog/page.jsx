import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getData() {
  // for localhost
  // const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' })

  // for vercel
  const res = await fetch('https://first-next-project-delta.vercel.app/api/posts', { cache: 'no-store' })

  if (!res.ok) {
    // return notFound();
    throw new Error("Failed to fetch data.")
  }

  return res.json()
}


const Blog = async () => {
  const data = await getData();

  return <div className={styles.mainContainer}>
    {data.map(item => (<Link key={item.id} href={`/blog/${item._id}`} className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={item.img}
          alt="Image must be here."
          width={400}
          height={250}
          className={styles.img}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.description}</p>
      </div>
    </Link>))}
  </div>;
};

export default Blog;
