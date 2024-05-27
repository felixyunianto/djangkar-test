"use client";

import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import homeNumbersImage from "@/public/images/home-numbers-image.webp";
import styles from "./index.module.scss";

const Highlight = () => {
  return (
    <div className={styles.highlight}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.first_column}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={styles.title}
            >
              Kesempurnaan dalam setiap langkah kami.
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={styles.description}
            >
              Kontruksi bangunan terpercaya yang akan mewujudkan bangunan impian
              Anda.
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.img_column}
          >
            <img src={homeNumbersImage.src} alt="home-numbers" />
          </motion.div>
        </div>
        <div className={styles.container}>
          <div className={cn(styles.first_column, styles.custom)}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={styles.value}
            >
              4+
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={styles.label}
            >
              Tahun pengalaman
            </motion.div>
          </div>
          <div className={styles.another_column}>
            <div className={styles.inside_column}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                10+
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                Proyek setiap tahun
              </motion.div>
            </div>
            <div className={styles.inside_column}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                45+
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                Kustomer senang
              </motion.div>
            </div>
            <div className={styles.inside_column}>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                45+
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                Proyek Selesai
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
