"use client";

import { WHY_CHOOSE_US } from "@/constant/home";
import { motion } from "framer-motion";

import homeIllustration from "@/public/svg/home-illustration-blue.svg";

import styles from "./index.module.scss";

export default function WhyChooseUs() {
  const generateWhyChooseUse = (index: number) => {
    return WHY_CHOOSE_US[index];
  };

  return (
    <div className={styles.why_choose_us}>
      <div className={styles.section}>
        <div className={styles.title_container}>
          <div className={styles.label}>PT. Djangkar Miring Indonesia</div>
          <div className={styles.title}>Kenapa harus memilih kami?</div>
        </div>
        <div className={styles.container}>
          <motion.div
            className={styles.column}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{opacity: 1, x: 0}}
            transition={{delay: 0.2, duration: 0.2}}
          >
            <div className={styles.title}>{generateWhyChooseUse(0).title}</div>
            <div className={styles.description}>
              {generateWhyChooseUse(0).description}
            </div>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src={homeIllustration.src}
            alt="home-illustration"
          />

          <div className={styles.double}>
            <motion.div
              className={styles.column}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{opacity: 1, x: 0}}
              transition={{delay: 0.2, duration: 0.2}}
            >
              <div className={styles.title}>
                {generateWhyChooseUse(1).title}
              </div>
              <div className={styles.description}>
                {generateWhyChooseUse(1).description}
              </div>
            </motion.div>
            <motion.div
              className={styles.column}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{opacity: 1, x: 0}}
              transition={{delay: 0.2, duration: 0.2}}
            >
              <div className={styles.title}>
                {generateWhyChooseUse(2).title}
              </div>
              <div className={styles.description}>
                {generateWhyChooseUse(2).description}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
