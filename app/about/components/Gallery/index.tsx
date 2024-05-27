'use client'

import cn from "classnames";
import { motion } from "framer-motion";
import { GALLERY_IMAGES } from "@/constant/about";
import styles from "./index.module.scss";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <div className={styles.section}>
        <div className={styles.title_container}>
          <div className={styles.label}>PT. Djangkar Miring Indonesia</div>
          <div className={styles.title}>Gallery</div>
        </div>
        <div className={styles.grid}>
          {GALLERY_IMAGES.map((galery, index) => (
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{opacity: 1, x: 0}}
              transition={{delay: 0.2, duration: 0.5}}
              className={cn(styles.grid_item)}
              key={`gallery-${index + 1}`}
            >
              <img src={galery.src} alt={`gallery-${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
