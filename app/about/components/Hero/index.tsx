"use client";

import { motion } from "framer-motion";

import aboutHeroImage from "@/public/images/about-hero-image.webp";

import styles from "./index.module.scss";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.section}>
        <div className={styles.text_container}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.title}
          >
            If <span>We Work</span> Then It Looks <span>Good</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.description}
          >
            <strong>PT. Djangkar Miring Indonesia</strong> merupakan perusahaan
            yang bergerak dalam bidang jasa pelaksana konstruksi, yang melayani
            produk dan jasa konstruksi bangunan sipil, elektrikal dan mekanikal.
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.button}
          >
            Kontak Kami
          </motion.button>
        </div>
        <div className={styles.image_container}>
          <img src={aboutHeroImage.src} alt="about-hero" />
        </div>
        <div className={styles.text_container}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.2 }}
            className={styles.description}
          >
            <strong>
              “PT. Djangkar Miring Indonesia berkomitmen menjadi salah satu
              perusahaan konstruksi terbaik dan profesional di Indonesia dengan
              mengutamakan pemenuhan kebutuhan, kepuasan dan keselamatan
              pelanggan.”
            </strong>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
