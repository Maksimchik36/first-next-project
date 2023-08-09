import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import styles from './page.module.css';

//dynamic metadata
export async function generateMetadata({ params }) {

  const post = await getDataById(params.id);

  return {
    title: post.title,
    description: post.description,
  }
}

async function getDataById(id) {

  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${id}`, { cache: 'no-store' })


  if (!res.ok) {
    return notFound();
  }

  return res.json()
}

const BlogPost = async ({ params }) => {
  
  const data = await getDataById(params.id);


  return <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.description}</p>
        <div className={styles.author}>
          <Image
            src={data.img}
            alt="Image must be here."
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>{data.username}</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src={data.img}
          alt="Image must be here."
          fill={true}
          className={styles.img}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>{data.content}</p>
    </div>
  </div>;
};


export default BlogPost;