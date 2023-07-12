import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' })

  if (!res.ok) {
    return notFound();
  }

  return res.json()
}


const Blog = async () => {
  const data = await getData();

  return <div className={styles.mainContainer}>
    {data.map(item => (<Link key={item.id} href='/blog/testId' className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          alt="Image must be here."
          width={400}
          height={250}
          className={styles.img}
        />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{item.title}</h1>
        <p className={styles.description}>{item.body}</p>
      </div>
    </Link>))}
  </div>;
};

export default Blog;
