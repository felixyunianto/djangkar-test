"use client";
import { motion } from "framer-motion";
import { FAQs } from "@/constant/about";
import styles from "./index.module.scss";

type TAnswer = {
  text: string | string[];
  index: number;
};

const Answer = (props: TAnswer) => {
  const isString = typeof props.text === "string";

  return isString ? (
    <motion.div
      initial={{ opacity: 0, x: (props.index + 1) % 2 === 0 ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.2 }}
      className={styles.answer_string}
    >
      {props.text}
    </motion.div>
  ) : (
    <div className={styles.answer_list}>
      {(props.text as string[]).map((string) => (
        <motion.div
          initial={{ opacity: 0, x: (props.index + 1) % 2 === 0 ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className={styles.answer_item}
          key={string}
        >
          {string}
        </motion.div>
      ))}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <div className={styles.section}>
        <div className={styles.section}>
          <div className={styles.title_container}>
            <div className={styles.label}>F.A.Q</div>
            <div className={styles.title}>Pertanyan yang sering ditanyakan</div>
          </div>

          <div className={styles.container}>
            {FAQs.map((faq, index) => (
              <div className={styles.item} key={faq.title}>
                <motion.div
                  initial={{ opacity: 0, x: (index + 1) % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.2 }}
                  className={styles.question}
                >
                  {faq.title}
                </motion.div>
                <Answer text={faq.answer} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
