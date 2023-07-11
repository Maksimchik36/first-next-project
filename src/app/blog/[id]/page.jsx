import React from "react";
import Image from "next/image";
import styles from './page.module.css';


const BlogPost = () => {
  return <div className={styles.container}>
    <div className={styles.top}>
      <div className={styles.info}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Description</p>
        <div className={styles.author}>
          <Image
            src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
            alt="Image must be here."
            width={40}
            height={40}
            className={styles.avatar}
          />
          <span className={styles.username}>username</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
          alt="Image must be here."
          fill={true}
          className={styles.img}
        />
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.text}>Text</p>
    </div>
    {/* <Link href='/blog/testId' className={styles.container}>
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
    </Link> */}
  </div>;
};

export default BlogPost;
