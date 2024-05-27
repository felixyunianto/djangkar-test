"use client";

import { motion } from "framer-motion";
import styles from "./index.module.scss";
import Fa6Icon from "@/components/Fa6Icon";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.section}>
        <div className={styles.container}>
          <div className={styles.text_container}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className=""
            >
              Kami <span>tahu cara</span> untuk membuat <span>bangunan</span>{" "}
              lebih baik
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.image_container}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className={styles.contact}
        >
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className={styles.column}
          >
            <div className={styles.header}>
              <Fa6Icon icon="FaPhone" className={styles.icon} />
              <h4>Telepon</h4>
            </div>
            <div className={styles.content}>
              02745013820
              <br />
              +62 811-11911-1611
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className={styles.column}
          >
            <div className={styles.header}>
              <Fa6Icon icon="FaLocationDot" className={styles.icon} />
              <h4>Alamat</h4>
            </div>
            <div className={styles.content}>
              Jl. Monjali, Ruko Gemawang No. 1 dan 2, Sinduadi, Mlati, Kabupaten
              Sleman, Daerah Istimewa Yogyakarta
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            whileInView={{ opacity: 1, height: "100%" }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className={styles.column}
          >
            <div className={styles.header}>
              <Fa6Icon icon="FaClock" className={styles.icon} />
              <h4>Jam Kerja</h4>
            </div>
            <div className={styles.content}>
              Monday - Saturday
              <br />
              8am – 6pm
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
