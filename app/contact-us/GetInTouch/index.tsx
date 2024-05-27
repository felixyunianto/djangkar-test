"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.scss";
import TextInput from "@/components/TextInput";
import Fa6Icon from "@/components/Fa6Icon";

export default function GetInTouch() {
  const [firstName, setFirstName] = useState<string>("First");
  const [lastName, setLastName] = useState<string>("Last");
  const [email, setEmail] = useState<string>("first_last@gmail.com");
  const [message, setMessage] = useState<string>("Halo first last name");

  return (
    <div className={styles.get_in_touch}>
      <div className={styles.section}>
        <div className={styles.title_container}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.label}
          >
            PT. Djangkar Miring Indonesia
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={styles.title}
          >
            Get in Touch
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className={styles.container}
        >
          <div className={styles.name_row}>
            <TextInput
              label="Nama"
              value={firstName}
              name={`first_name`}
              onChange={(value) => {
                setFirstName(value);
              }}
              required
              helperText="First"
              className={styles.input_name}
            />
            <TextInput
              label=""
              value={lastName}
              name={`last_name`}
              onChange={(value) => {
                setLastName(value);
              }}
              helperText="Last"
              className={styles.input_name}
            />
          </div>
          <TextInput
            label="Email"
            value={email}
            name={`email`}
            onChange={(value) => {
              setEmail(value);
            }}
            required
          />

          <TextInput
            label="Pesan"
            value={message}
            name={`message`}
            onChange={(value) => {
              setMessage(value);
            }}
            required
            type="textarea"
          />

          <button className={styles.submit_button}>
            <Fa6Icon icon="FaRegPaperPlane" />
            Kirim Pesan
          </button>
        </motion.div>
      </div>
    </div>
  );
}
