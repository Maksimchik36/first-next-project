import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button.jsx";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
}

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map(item => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.description}>{item.description}</p>
            <Button text="See more" url="#"></Button>
          </div>

          <div className={styles.imgContainer}>
            <Image
              src={item.image}
              alt={item.title}
              fill={true}
              className={styles.img}
            />
          </div>
        </div>))}
    </div>
  );
};

export default Category;
