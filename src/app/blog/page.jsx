import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";


const Blog = () => {
  return <div className={styles.mainContainer}>
    <Link href='/blog/testId' className={styles.container}>
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
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Description</p>
      </div>
    </Link>
  </div>;
};

export default Blog;
