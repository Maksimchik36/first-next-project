import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 MaxDev. All rights reserved.</div>
      <div className={styles.social}>
        <Image
          src="/facebook.png"
          alt="facebook"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/instagram.png"
          alt="instagram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/telegram.png"
          alt="telegram"
          width={15}
          height={15}
          className={styles.icon}
        />
        <Image
          src="/youtube.png"
          alt="youtube"
          width={15}
          height={15}
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
