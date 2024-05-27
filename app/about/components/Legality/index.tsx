"use client";

import { motion } from "framer-motion";
import aboutPageIllustration from "@/public/svg/about-page-illustration.svg";

import styles from "./index.module.scss";

export default function Legality() {
  return (
    <div className={styles.legality}>
      <div className={styles.section}>
        <div className={styles.container}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.title}
          >
            Legalitas Kami
          </motion.div>
          <div className={styles.list}>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                NPWP
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                85.137.139.3-542.000
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                SPPKP
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                S-23PKP/WPJ.09/KP.0303/2020
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                NIB
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                21 1 1220045634
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                SBU
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                3-3273-05-086-1-10-990312
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                IUJK
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                3-3273-05-086-1-10-990312
              </motion.div>
            </div>
            <div className={styles.item}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.label}
              >
                Akta pendirian
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.2 }}
                className={styles.value}
              >
                No.37 Tanggal 11 November 2022, H. EDWYN AGUNG, ST, SH. Mkn.
              </motion.div>
            </div>
          </div>
        </div>
        <div className={styles.image_container}>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            src={aboutPageIllustration.src}
            alt="about-page-illustration"
          />
        </div>
      </div>
    </div>
  );
}
