"use client";

import TextInput from "@/components/TextInput";
import styles from "./index.module.scss";
import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState<string>("");

  return (
    <div className={styles.subscribe}>
      <div className={styles.section}>
        <div className={styles.image_container} />

        <div className={styles.text_container}>
          <div className={styles.title}>Subscribe untuk berita terbaru</div>
          <div className={styles.form_container}>
            <TextInput
              placeholder="Alamat email"
              value={email}
              onChange={(value) => {
                setEmail(value);
              }}
              name={`email_address`}
              className={styles.email_input}
            />

            <button className={styles.subscribe_button}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
