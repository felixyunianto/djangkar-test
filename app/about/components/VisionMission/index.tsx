"use client";

import cn from "classnames";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import curvedArrow from "@/public/images/arrow-curved.png";

import styles from "./index.module.scss";

export default function VisionMission() {
  return (
    <div className={styles.vission_mission}>
      <div className={styles.section}>
        <div className={styles.section}>
          <div className={styles.title_container}>
            <div className={styles.label}>PT. Djangkar Miring Indonesia</div>
            <div className={styles.title}>Visi Misi Kami</div>
          </div>
          <div className={styles.container}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={cn(styles.card, styles.vission)}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: 1,
                }}
                className={styles.circle}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: 1,
                }}
                className={styles.circle_2}
              />
              <div className={styles.title}>Visi</div>
              <div className={styles.description}>
                Menjadi Perusahaan kontruksi terpercaya, handal, dan mampu
                bersaing serta berkembang.
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 90 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.arrow}
            >
              <img src={curvedArrow.src} alt="arrow-curved" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 270 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileInView={{ opacity: 1, rotate: 180 }}
              className={cn(styles.arrow, styles.second)}
            >
              <img src={curvedArrow.src} alt="arrow-curved" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.2 }}
              className={cn(styles.card, styles.mission)}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: 1,
                }}
                className={styles.circle}
              />

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "linear",
                  delay: 1,
                }}
                className={styles.circle_2}
              />
              <div className={styles.title}>Misi</div>
              <div className={styles.mission_list}>
                <div className="">
                  <FaCheck />
                  Membangun kepercayaan dan kepuasan kepada customer.
                </div>
                <div className="">
                  <FaCheck />
                  Menjalin kerjasama yang baik terhadap customer dan investor.
                </div>
                <div className="">
                  <FaCheck />
                  Turut serta dalam pembangunan nasional.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
