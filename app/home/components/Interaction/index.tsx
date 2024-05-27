"use client";

import React from "react";

import homeFooterCta from "@/public/images/home-footer-cta-image.webp";

import styles from "./index.module.scss";
import { useRouter } from "next/navigation";

const Interaction = () => {
  const router = useRouter();
  const onClickButton = () => {
    router.push("/contact-us");
  };

  return (
    <div className={styles.interaction}>
      <div className={styles.section}>
        <div className={styles.first_column}>
          <div className={styles.title}>
            Apakah Anda ingin mewujudkan bangunan impian Anda?
          </div>

          <button className={styles.button} onClick={onClickButton}>
            Hubungi Kami
          </button>
        </div>
        <img src={homeFooterCta.src} alt="home-footer-cta" />
      </div>
    </div>
  );
};

export default Interaction;
