'use client'

import { motion } from "framer-motion";

import styles from "./index.module.scss";
import { SERVICE_LIST } from "@/constant/home";
import Fa6Icon from "@/components/Fa6Icon";

export default function Service() {
  return (
    <div className={styles.service}>
      <div className={styles.section}>
        <motion.div
          className={styles.information}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.2,
            delay: 0.2,
          }}
        >
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.4,
            }}
            className={styles.title}
          >
            Semua Terjamin Secara Tertulis
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.2,
              delay: 0.5,
            }}
            className={styles.description}
          >
            Percayakan pekerjaan kepada kami.
          </motion.div>
        </motion.div>
        <div className={styles.service_list}>
          {SERVICE_LIST.map((service) => (
            <div className={styles.service_item} key={service.key}>
              <Fa6Icon icon={service.icon} className={styles.service_icon} />
              <div className={styles.service_text}>
                <motion.h5
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className={styles.service_title}
                >
                  {service.title}
                </motion.h5>
                <div>
                  {service.description?.map((desc) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.2 }}
                      key={`${service.key}-${desc}`}
                      className={styles.service_description}
                    >
                      {desc}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
